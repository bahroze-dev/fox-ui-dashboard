import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import CustomSelect from "components/CustomSelect/CustomSelect.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
// import { AttachMoney, AddAPhoto } from "@material-ui/icons";
import { Grow, IconButton } from "@material-ui/core";
import MyCustomTable from "../../../components/MyCustomTable/MyCustomTable";
import MyCustomDialog from "../../../components/MyCustomDialog/MyCustomDialog.js";
import testImage from "assets/img/faces/kendall.jpg";
import ModifyContent from 'views/Products/Tabs/DialogTabContent/ModifyContent';
import ModifyImage from 'views/Products/Tabs/DialogTabContent/ModifyImage';
import { InsertPhoto, InsertPhotoOutlined, EditAttributes, EditAttributesOutlined } from '@material-ui/icons'


const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    },
    avartarIconButton:{
        padding:"0",
        borderColor:"#82818194",
        transition: "box-shadow 0.2s, top 0.2s",
        boxShadow:" 0 0 3px #515151",
        top:0,
        '&:hover':{
            boxShadow:"rgba(0, 0, 0, 0.52) 3px 4px 12px 0px, rgba(55, 71, 79, 0.62) 0px 7px 10px -5px",
            top:-5,
        },
        
    }
};

const useStyles = makeStyles(styles);

export default function ProductsEdit(props) {
    const classes = useStyles();
    var handler = false;
    const [tabSelector,setTabSelector] = React.useState(0);
    const [showDialogBox, setShowDialogBox] = React.useState(false);
    

    function handleSelection() {
        if(handler){
            handler=false
        }else{
            setTabSelector(0)
            setShowDialogBox(true);
        }
    }

    function handleClose() {
        
        setShowDialogBox(false)
      
    }
    function handleButtonSelection(){
        handler = true
        setTabSelector(1)
        setShowDialogBox(true)
    }

   
    return (
        <div>
            <Grow in={true}
                {...(true ? { timeout: 1000 } : {})}>
                <div>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <Card>
                                <CardHeader color="rose">
                                    <h4 className={classes.cardTitleWhite}>Edit Products</h4>
                                    <p className={classes.cardCategoryWhite}>You can Edit products by using following table</p>
                                </CardHeader>
                                <CardBody>
                                    <Grow in={true} timeout={1200}>
                                        <div>
                                            <MyCustomTable
                                                tableHeaderColor="rose"
                                                tableHead={[
                                                    //field should match wih data object.
                                                    { title: 'Product Name', field: 'p_name' },
                                                    { title: 'Price', field: 'p_price' },
                                                    { title: 'Quantity', field: 'p_quantity' },
                                                    { title: 'Category', field: 'p_category' },
                                                    { title: 'Manufacturer', field: 'p_manufacturer' },
                                                    {
                                                        title: 'Images',
                                                        field: 'p_image',
                                                        render: rowData =>
                                                            <div>
                                                                <AvatarGroup max={4}>
                                                                    <IconButton className={classes.avartarIconButton} onClick={handleButtonSelection}> 
                                                                        <Avatar 
                                                                            alt="Remy Sharp" 
                                                                            src={testImage} 
                                                                            style={{
                                                                                width: "40px",
                                                                                height: "40px",
                                                                            }}
                                                                            />
                                                                    </IconButton>
                                                                   
                                                                    <IconButton className={classes.avartarIconButton}> 
                                                                        <Avatar 
                                                                            alt="Remy Sharp" 
                                                                            src={testImage} 
                                                                            style={{
                                                                                width: "40px",
                                                                                height: "40px",
                                                                            }}
                                                                        />
                                                                    </IconButton>
                                                                    <IconButton className={classes.avartarIconButton}> 
                                                                        <Avatar 
                                                                            alt="Remy Sharp" 
                                                                            src={testImage} 
                                                                            style={{
                                                                                width: "40px",
                                                                                height: "40px",
                                                                            }}
                                                                            />
                                                                    </IconButton>
                                                                    <IconButton className={classes.avartarIconButton}> 
                                                                        <Avatar 
                                                                            alt="Remy Sharp" 
                                                                            src={testImage} 
                                                                            style={{
                                                                                width: "40px",
                                                                                height: "40px",
                                                                            }}
                                                                            />
                                                                    </IconButton>
                                                                    <IconButton className={classes.avartarIconButton}> 
                                                                        <Avatar 
                                                                            alt="Remy Sharp" 
                                                                            src={testImage} 
                                                                            style={{
                                                                                width: "40px",
                                                                                height: "40px",
                                                                            }}
                                                                            />
                                                                    </IconButton>
                                                                </AvatarGroup>
                                                            </div>

                                                    },

                                                ]}
                                                tableData={[
                                                    { p_name: 'T shirt', p_price: '$ 20', p_quantity: 22, p_category: "Shirts", p_manufacturer: "Khaadi", imageUrl: testImage },
                                                    { p_name: 'Pants', p_price: '$ 50', p_quantity: 52, p_category: "Pants", p_manufacturer: "Limelight", p_image: "test" },
                                                ]}
                                                handleRowSelection={handleSelection}
                                            />
                                            <MyCustomDialog
                                                tabSelector={tabSelector}
                                                headerColor={'fox'}
                                                openDialog={showDialogBox}
                                                onCloseDialog={handleClose}
                                                title="Modify Product"
                                                tabs={[
                                                    {
                                                        MainIcon: EditAttributes ,
                                                        SecondaryIcon: EditAttributesOutlined,
                                                        title:"Modify",
                                                        tabBody:ModifyContent
                                                    },
                                                    {
                                                        MainIcon: InsertPhoto ,
                                                        SecondaryIcon: InsertPhotoOutlined,
                                                        title:"Image",
                                                        tabBody:ModifyImage
                                                    },
                                                ]}
                                            />
                                             
                                    


                                        </div>
                                    </Grow>

                                </CardBody>
                            </Card>
                        </GridItem>

                    </GridContainer>

                </div>
            </Grow>
        </div>
    );
}
