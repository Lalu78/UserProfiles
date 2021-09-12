import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
} from "@material-ui/core";


const useStyle = makeStyles((theme) => ({
  DialogWraper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(7),
    right: theme.spacing(10),

    width: "300px",
    height: "390px",
    borderRadius: "20px",
    boxShadow: "black",
  },
}));

const Logoutpopup = (props) => {
    const { title, children, openPopup, setOpenPopup } = props;
   
  const classes = useStyle();

  return (
    <Dialog
      open={openPopup}
      maxWidth="sm"
      classes={{ paper: classes.DialogWraper }}
    >
      <DialogTitle></DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
export default Logoutpopup;
