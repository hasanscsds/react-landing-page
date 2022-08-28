import React, {useState} from 'react'
import {Button, Modal,ModalHeader, ModalBody} from "reactstrap";
import SearchIcon from '@material-ui/icons/Search';

  
function ResponsiveModal() {
  
    // Modal open state
    const [modal, setModal] = useState(false);
  
    // Toggle for Modal
    const toggle = () => setModal(!modal);
  
    return (
        <div className="responsiveModal">
            <Button onClick={toggle}>
                <SearchIcon/>
            </Button>
            <Modal isOpen={modal} toggle={toggle} modalTransition={{ timeout: 500 }}>
                <ModalHeader>
                    Search
                </ModalHeader>
                <ModalBody className="modalBody">
                    <div className="searchSec">
                        <form>
                            <input type="text" 
                                className="searchInput"
                                placeholder="Search For Products, Brands & Categoories"
                                />
                            <button type="button" className="searchBtn">
                                <SearchIcon/>
                            </button>
                        </form>
                    </div>
                </ModalBody>
                
            </Modal>
        </div >
    );
}
export default ResponsiveModal;