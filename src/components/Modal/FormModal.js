import React from 'react'
import styles from './ConfirmTransfer.module.css';
import jsPDF from "jspdf";


let FormModal = ({ data, closeModal,status }) => {
    const generatePDF = () => {
        const doc = new jsPDF();
        if(status){
         
            doc.text(20, 20, "XXXXXXXXX   TRANSACTION RECIEPT XXXXXXXXXXXXX")
            doc.text(`Amount:------------  $${data.amount}`, 20, 40);
            doc.text(`Date:------------  ${data.dateOfDeposit || data.dateOfTransfer}`, 20, 60);
            doc.text(`Account Number:------------  ${data.accountNumber}`, 20, 80);
            doc.text(`Account Name:------------  ${data.accountName}`, 20, 100);
            doc.text(`Route Number:------------  ${data.routeNumber}`, 20, 120);
            doc.text(`Reason:------------  ${data.reason}`, 20, 140);
            doc.text(`Transfer Medium:------------  ${data.medium}`, 20, 160);
            doc.save("demo.pdf");
            return
        }else{
            doc.text(20, 20, "XXXXXXXXX   TRANSACTION RECIEPT XXXXXXXXXXXXX")
            doc.text(`Deposit ID:------------  ${data.depositId}`, 20, 40);
            doc.text(`Date:------------  ${data.dateOfDeposit}`, 20, 60);
            doc.text(`Amount:------------  $${data.amount}`, 20, 80);
            doc.text(`Status:------------  ${data.status}`, 20, 100);
            doc.save("demo.pdf");
        }
    }


    return <div className={styles.favoriteListCard}>
        <div className={styles.favoriteCard}>
            <div className={styles.headsection}><h3>Details</h3><span className='material-icons' onClick={closeModal}>backspace</span></div>

            <div className={styles.body}>
          

                <div className={styles.inputCard}>
                    <label>
                        Amount
                    </label>

                    <input  value={`$${data.amount}`} readOnly/>
                </div>

                <div className={styles.inputCard}>
                    <label>
                        Date
                    </label>

                    <input  value={data.dateOfDeposit?data.dateOfDeposit:data.dateOfTransfer} readOnly/>
                </div>

                <p onClick={generatePDF} style={{marginBottom:'30px'}}>print reciept</p>

                <button onClick={closeModal}>close</button>

            </div>
        </div>

    </div>
}

export default FormModal