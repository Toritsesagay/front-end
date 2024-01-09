import React, { useState, useEffect } from 'react';
import styles from './Login.module.css';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import SubmitBtn from '../components/Submit';
import Loader from "../components/loader";
import { profilePhoto } from '../store/action/userAppStorage';
import Modal from '../components/Modal/Modal';
import ReactS3 from 'react-s3';
window.Buffer = window.Buffer || require("buffer").Buffer;
const imageMimeType = /image\/(png|jpg|jpeg)/i;





function ProfilePhotoPage() {
    let [preloader, setPreloader] = useState(true)
    let [isError, setIsError] = useState(false)

    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(false)
    let [isUrl, setIsUrl] = useState('')
    let navigate = useNavigate()
    let [photo, setPhoto] = useState(false)
    const [photoDataURL, setPhotoDataURL] = useState(null);
    let [isChangePhoto, setIsChangePhoto] = useState(false)




    //initialising reduzx
    let dispatch = useDispatch()
    //initialise router



    useEffect(() => {
        setTimeout(() => {
            setPreloader(false)
        }, 5000)

    }, [])






    const submitHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        //uplaoding photo to aws
        let imgUrl

        const config = {
            dirName: 'bucket/',
            bucketName: 'coinbasebuckets',
            region: 'us-east-1',
            accessKeyId: 'AKIAZZTWQ7HAPRYD3APX',
            secretAccessKey: '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'
        }

        let upload = async () => {
            if (!photo) {
                return
            }

            return ReactS3.uploadFile(photo, config).then(response => {

                if (response.result.status !== 204)
                    throw new Error("Failed to upload image to S3");
                else {

                    imgUrl = (response.location)
                }
            })
                .catch(error => {
                    console.log(error);
                })
        }



        await upload()

        let response = await dispatch(profilePhoto({
            profilePhotoUrl: imgUrl
        }))


        if (!response.bool) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(response.message)
            setIsUrl(response.url)
        }

        setIsLoading(false)
        setIsError(true)
        setIsErrorInfo(response.message)
        setIsUrl(response.url)

    }


    let closeModal = () => {
        setIsError(false)
        if (isUrl) {
            navigate(`${isUrl}`)
        }
    }




    const changePhotoHandler = (e) => {
        const file = e.target.files[0];
        if (!file.type.match(imageMimeType)) {
            alert("Image mime type is not valid");
            return;
        }
        setIsChangePhoto(true)
        setPhoto(file);
    }




    useEffect(() => {
        let fileReader, isCancel = false;

        if (photo) {
            fileReader = new FileReader();
            fileReader.onload = (e) => {

                const { result } = e.target;

                if (result && !isCancel) {
                    console.log(result)
                    setPhotoDataURL(result)
                }
            }
            fileReader.readAsDataURL(photo);
        }
        return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        }
    }, [photo]);







    return (<>
        {isError && <Modal content={isErrorInfo} closeModal={closeModal} />}



        <div className={styles.screenContainer}>
            {isLoading && <Loader />}
            <div className={styles.rightContainer}>

                <form className={styles.rightformcontainer} onSubmit={submitHandler}>

                    <div className={styles.navigate}>
                        <span className='material-icons'>arrow_back</span>
                        <h2> Profile photo</h2>
                    </div>

                    <div className={styles.inputcontainer}>
                        <p> Pick a profile image of yourself </p>
                    </div>

                    <div className={styles.inputcontainer}>
                        <div className={styles.imageContainer}>
                            {photoDataURL ? <img src={`${photoDataURL}`} /> : <span className='material-icons'>person</span>}
                        </div>
                    </div>

                    <div className={styles.formCard}>

                        <div className={styles.submit}>
                            <input placeholder='pick photo' type='file' onChange={changePhotoHandler} />
                        </div>

                        {photoDataURL ? <div className={styles.submit}>
                            <SubmitBtn style={{ borderRadius: '20px', marginBottom: '20px' }} text="Upload" />
                        </div> : ''}

                    </div>






                </form>

            </div>


        </div>
    </>

    );
}

export default ProfilePhotoPage