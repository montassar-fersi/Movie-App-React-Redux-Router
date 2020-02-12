import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { connect } from "react-redux";
import { addmovie,editmovie } from "../Actions/action";


class AddMovie extends Component {
    state={ open :false,
    image: this.props.movie ? this.props.movie.image : "",
    name: this.props.movie ? this.props.movie.name : "",
    an: this.props.movie ? this.props.movie.an : "",
    rate: this.props.movie ? this.props.movie.rate : ""}

    onEdit = ()=>{
      this.props.editmovie(this.state, this.props.movie.id);
       this.handleClose()
    }

    handleOpen = () => {
        this.setState({open : true})
      };
    
      handleClose = () => {
        this.setState({open : false})
      };
      chng=(e)=>{
          this.setState({[e.target.name]: e.target.value})
      }
    render() {
        return (
     <div>
      <button  className={this.props.movie?"btnED":"btn-modal"} type="button" onClick={this.handleOpen}>
      {this.props.movie ? "EDIT" : "+"}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={this.state.open}
        onClose={this.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={this.state.open}>
          <div className="paper">
            <h2>Add Movies :</h2>
            <input 
            name="name"
             type='text'
             placeholder='title' 
             onChange={this.chng}
            value={this.state.name}/>
            <input name="image"
             type='text'
             placeholder='Link' 
             onChange={this.chng}
             value={this.state.image}
             />
            <input 
            name="an"
             type='text'
             placeholder='year'
            onChange={this.chng}
            value={this.state.an}/>
            <input
              name="rate" 
              type='text'
              placeholder='rate'
               onChange={this.chng}
               value={this.state.rate}
               />
            <button  onClick={() => {
                    this.props.movie
                      ?    (this.onEdit())
                      : this.props.addmovie({
                          id: Math.random(),
                          ...this.state
                        });this.handleClose()
                  }}
             >Save</button>
            <button onClick={this.handleClose}>Cancel</button>
          </div>
        </Fade>
      </Modal>
    </div>
        )
    }
};
const mapDispatchToProps = dispatch => {
    return {
      addmovie: payload => dispatch(addmovie(payload)),
      editmovie: (payload,id) => dispatch(editmovie(payload,id))
    };
  };
export default connect(null, mapDispatchToProps)(AddMovie);
