import React, { useState, useEffect, useCallback } from 'react';
import styles from './Login.module.css';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import SubmitBtn from '../components/Submit';
import Loader from "../components/loader";
import { registeration } from '../store/action/userAppStorage';
import Modal from '../components/Modal/Modal';
import FormInput from '../components/Input';
import SelectInput from '../components/select';
import ReactS3 from 'react-s3';
window.Buffer = window.Buffer || require("buffer").Buffer;
const imageMimeType = /image\/(png|jpg|jpeg)/i;





function RegisterationPage() {
    let [preloader, setPreloader] = useState(true)
    let [isError, setIsError] = useState(false)

    let [userNid, setUserNid] = useState('')
    let [userNidError, setUserNidError] = useState('')

    let [userCountry, setUserCountry] = useState('')
    let [userCountryError, setUserCountryError] = useState('')

    let [userState, setUserState] = useState('')
    let [userStateError, setUserStateError] = useState('')


    let [userAddress, setUserAddress] = useState('')
    let [userAddressError, setUserAddressError] = useState('')


    let[photo, setPhoto] = useState(false)
    const [photoDataURL, setPhotoDataURL] = useState(null);
    let [isChangePhoto, setIsChangePhoto] = useState(false)
    let [isUrl,setIsUrl] = useState('')
    
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(false)
    //initialising reduzx
    let dispatch = useDispatch()
    //initialise router
    let navigate = useNavigate()



    useEffect(() => {
        setTimeout(() => {
            setPreloader(false)
        }, 5000)
    }, [])

    let formValid = !userNidError && !userCountryError && !userStateError && !userAddressError

    const submitHandler = async (e) => {
        e.preventDefault()
        if(!formValid){
            return
        }


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


        let response = await dispatch(registeration({
            Nid: userNid,
            country: userCountry,
            state: userState,
            address: userAddress,
            passportUrl:imgUrl
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
        if(isUrl){
            navigate(`${isUrl}`)
            
        }
    }





    let setFormDetails = useCallback(e => {
        setIsError(false)
        if (e.formName === "userNID") {
            let formValue = e.value
            setUserNid(formValue)
            setUserNidError(e.error)
            return

        } else if (e.formName === "userCountry") {
            let formValue = e.value
            setUserCountry(formValue)
            setUserCountryError(e.error)
            return

        } else if (e.formName === "userState") {
            let formValue = e.value
            setUserState(formValue)
            setUserStateError(e.error)
            return

        } else if (e.formName === "userAddress") {
            let formValue = e.value
            setUserAddress(formValue)
            setUserAddressError(e.error)
            return
        }
    }, [])


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
                        <h2>Registeration</h2>
                    </div>

                    <div className={styles.inputcontainer}>

                        <div className={styles.passportheading}>
                            upload your passport or ID
                        </div>


                        <div className={styles.imagePreviewContainer}>
                            {photoDataURL ? <img className={styles.imagePreview} src={photoDataURL} />: <input className={styles.imagePreview} type='file'onChange={changePhotoHandler} />}
                        </div>


                        <div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                type='text'
                                types="text"
                                className="formcard"
                                formName="userNID"
                                placeholder='SSN/Driver license Card Number'
                                setFormDetails={setFormDetails}
                            />

                        </div>

                        <div className={styles.formCard}>
                            <SelectInput
                                className="formcard"
                                formName="userCountry"
                                setFormDetails={setFormDetails}
                            >
                                <option> Country</option>
                                <option> United State</option>
                                <option>United Kingdom</option>
                                <option>Afghanistan</option>
                                <option>Albania</option>
                                <option>Algeria</option>
                                <option>American Samoa</option>
                                <option>Andorra</option>
                                <option>Angola</option>
                                <option>Anguilla</option>
                                <option>Antarctica</option>
                                <option>Antigua and Barbuda</option>
                                <option>Argentina</option>
                                <option>Armenia</option>
                                <option>Aruba</option>
                                <option>Australia</option>
                                <option>Austria</option>
                                <option>Azerbaijan</option>
                                <option>Bahamas</option>
                                <option>Bahrain</option>
                                <option>Bangladesh</option>
                                <option>Barbados</option>
                                <option>Belarus</option>
                                <option>Belgium</option>
                                <option>Belize</option>
                                <option>Benin</option>
                                <option>Bermuda</option>
                                <option>Bhutan</option>
                                <option>Bolivia</option>
                                <option>Bosnia and Herzegovina</option>
                                <option>Botswana</option>
                                <option>Bouvet Island</option>
                                <option>Brazil</option>
                                <option>British Indian Ocean Territory</option>
                                <option> Brunei Darussalam</option>
                                <option>Bulgaria</option>
                                <option>Burkina Faso</option>
                                <option>Burundi</option>
                                <option>Cambodia</option>
                                <option>Cameroon</option>
                                <option>Canada</option>
                                <option>Cape Verde</option>
                                <option>Cayman Islands</option>
                                <option>Central African Republic</option>
                                <option>Chad</option>
                                <option>Chile</option>
                                <option>China</option>
                                <option>Christmas Island</option>
                                <option>Cocos (Keeling) Islands</option>
                                <option>Colombia</option>
                                <option>Comoros</option>
                                <option>Congo</option>
                                <option>Congo, The Democratic Republic of The
                                    <option>Cook Islands</option>

                                    <option>Costa Rica</option>

                                    <option>Cote D'ivoire</option>
                                    <option>Croatia</option>

                                    <option>Cuba</option>

                                    <option>Cyprus</option>

                                    <option>Czech Republic</option>
                                    <option>Denmark</option>
                                    <option>Djibouti</option>
                                    <option>Dominica</option>
                                    <option>Dominican Republic</option>
                                    <option>Ecuador</option>
                                    <option>Egypt</option>
                                    <option>El Salvador</option>
                                    <option>Equatorial Guinea</option>
                                    <option>Eritrea</option>
                                    <option>Estonia</option>
                                    <option>Ethiopia</option>
                                    <option>Falkland Islands (Malvinas)</option>

                                    <option>Faroe Islands</option>
                                    <option>Fiji</option>
                                    <option>Finland</option>
                                    <option>France</option>
                                    <option>French Guiana</option>
                                    <option>French Polynesia</option>
                                    <option>French Southern Territories</option>
                                    <option>Gabon</option>
                                    <option>Gambia</option>
                                    <option>Georgia</option>
                                    <option>Germany</option>
                                    <option>Ghana</option>
                                    <option>Gibraltar</option>
                                    <option>Greece</option>
                                    <option>Greenland</option>
                                    <option>Grenada</option>
                                    <option>Guadeloupe</option>
                                    <option>Guam</option>
                                    <option>Guatemala</option>
                                    <option>Guinea</option>
                                    <option>Guinea-bissau</option>
                                    <option>Guyana</option>
                                    <option>Haiti</option>
                                    <option>Heard Island and Mcdonald Islands</option>

                                    <option>Holy See (Vatican City State)">Holy See (Vatican City State)</option>

                                    Honduras</option>

                                <option>Hong Kong</option>
                                <option>Hungary</option>
                                <option>Iceland</option>
                                <option>India</option>
                                <option>Indonesia</option>
                                <option>Iran, Islamic Republic </option>

                                <option>Iraq</option>
                                <option>Ireland</option>

                                <option>Israel</option>
                                <option>Italy</option>
                                <option>Jamaica</option>
                                <option>Japan</option>
                                <option>Jordan</option>
                                <option>Kazakhstan</option>
                                <option>Kenya</option>
                                <option>Kiribati</option>
                                <option>Korea, Democratic </option>

                                <option>Kuwait</option>
                                <option>Kyrgyzstan</option>

                                <option>Lao People's Democratic Republic</option>

                                <option>Latvia</option>

                                <option>Lebanon</option>

                                <option>Lesotho</option>

                                <option>Liberia</option>

                                <option>Libyan Arab Jamahiriya</option>

                                <option>Liechtenstein</option>

                                <option>Lithuania</option>

                                <option>Luxembourg</option>
                                <option>Macao</option>

                                <option>Macedonia, The Former Yugoslav Republic of</option>

                                <option>Madagascar</option>
                                <option>Malawi</option>

                                <option>Malaysia</option>

                                <option>Maldives</option>

                                <option>Mali</option>

                                <option>Malta</option>

                                <option>Marshall Islands</option>

                                <option>Martinique</option>

                                <option>Mauritania</option>

                                <option>Mauritius</option>

                                <option>Mayotte</option>

                                <option>Mexico</option>

                                <option>Micronesia, Federated States of</option>

                                <option>Moldova, Republic of</option>

                                <option>Monaco</option>
                                <option>Mongolia</option>

                                <option>Montserrat</option>

                                <option>Morocco</option>

                                <option>Mozambique</option>
                                <option>Myanmar</option>

                                <option>Namibia</option>

                                <option>Nauru</option>

                                <option>Nepal</option>

                                <option>Netherlands</option>

                                <option>Netherlands </option>

                                <option>New Caledonia</option>

                                <option>New Zealand</option>

                                <option> Nicaragua</option>

                                <option>Niger</option>

                                <option>Nigeria</option>

                                <option>Niue</option>

                                <option>Norfolk Island</option>

                                <option>Northern Mariana Islands</option>

                                <option>Norway</option>

                                <option>Oman</option>

                                <option>Pakistan</option>

                                <option>Palau</option>

                                <option>Palestinian Territory, Occupied</option>

                                <option>Panama</option>

                                <option>Papua New Guinea</option>

                                <option>Paraguay</option>

                                <option>Peru</option>

                                <option>Philippines</option>

                                <option>Pitcairn</option>

                                <option>Poland</option>

                                <option>Portugal</option>

                                <option>Puerto Rico</option>

                                <option>Qatar</option>

                                <option>Reunion</option>

                                <option>Romania</option>

                                <option>Russian Federation</option>

                                <option>Rwanda</option>

                                <option>Saint Helena</option>

                                <option>Saint Kitts and Nevis</option>

                                <option>Saint Lucia</option>


                                <option>Saint Pierre and Miquelon</option>


                                <option>Saint Vincent and The Grenadines</option>

                                <option>Samoa</option>

                                <option>San Marino</option>

                                <option>Sao Tome and Principe</option>

                                <option>Saudi Arabia</option>

                                <option>Senegal</option>

                                <option>Serbia and Montenegro</option>

                                <option>Seychelles</option>

                                <option>Sierra Leone</option>

                                <option>Singapore</option>

                                <option>Slovakia</option>

                                <option>Slovenia</option>


                                <option>Solomon Islands</option>

                                <option>Somalia</option>

                                <option>South Africa</option>


                                <option>South Georgia and The South Sandwich Islands</option>

                                <option>Spain</option>

                                <option>Sri Lanka</option>

                                <option>Sudan</option>

                                <option>Suriname</option>


                                <option>Svalbard and Jan Mayen</option>


                                <option>Swaziland</option>

                                <option> Sweden</option>

                                <option>Switzerland</option>

                                <option>Syrian Arab Republic</option>

                                <option>Taiwan, Province of China</option>


                                <option>Tajikistan</option>

                                <option>Tanzania, United Republic of</option>

                                <option>Thailand</option>

                                <option>Timor-leste</option>

                                <option>Togo</option>

                                <option>Tokelau</option>

                                <option>Tonga</option>

                                <option>Trinidad and Tobago</option>

                                <option>Tunisia</option>
                                <option> Turkey</option>
                                <option>Turkmenistan</option>
                                <option>Turks and Caicos Islands</option>
                                <option>Tuvalu</option>
                                <option>Uganda</option>
                                <option>Ukraine</option>

                                <option>United Arab Emirates</option>
                                <option>United States </option>

                                <option>Minor Outlying</option>
                                <option>Islands</option>
                                <option>Uruguay</option>
                                <option>Uzbekistan</option>
                                <option>Vanuatu</option>
                                <option>Venezuela</option>
                                <option>Viet Nam</option>
                                <option>Virgin Islands, British</option>
                                <option>Virgin Islands, U.S.</option>
                                <option>Wallis and Futuna</option>

                                <option>Western Sahara</option>
                                <option>Yemen</option>
                                <option>Zambia</option>
                                <option>Zimbabwe</option>

                            </SelectInput>
                        </div>

                        <div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                type='text'
                                types="text"
                                className="formcard"
                                formName="userState"
                                placeholder='State'
                                setFormDetails={setFormDetails}
                            />
                        </div>



                        <div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                type='text'
                                types="text"
                                className="formcard"
                                formName="userAddress"
                                placeholder='address'
                                setFormDetails={setFormDetails}
                            />

                        </div>

                    </div>

                    <div className={styles.submit}>
                        <SubmitBtn style={{ borderRadius: '20px', marginBottom: '10px' }} text="Send" />
                    </div>
                </form>

            </div>


        </div>
    </>

    );
}

export default RegisterationPage