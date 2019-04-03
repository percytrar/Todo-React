import React , {Component} from 'react';

class AddTodo extends Component{
    state = {
        task:''
    }
    handleChange = (e) =>{
        let task = e.target.value;
        this.setState({
            task
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            task:''
        })
    }
    render(){
        return(
            <form className=" col s12"onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="input-field col s12">
                        <label>Enter Task </label>
                        <input type="text" onChange={this.handleChange} value={this.state.task}></input>
                    </div> 
                </div>                               
            </form>            
        )
    }
}
export default AddTodo;