import { Component } from "react";


class AddTask extends Component {

    state = {
        desc : " "
    }
    render() {
        return(
            <div>
                <div>
                    <input
                        type='text'
                        placeholder='Add your todo'
                        onChange={ (e) => this.setState({ desc : e.target.value}) }
                        /> 
                </div>

                <div>
                    <img 
                    src={ require('../assets/add-removebg-preview.png') }
                    alt="add"
                    onClick={ () =>
                        this.props.handleAdd({
                            id: Date.now(),
                            description : this.state.desc,
                            done : false
                            })
                        }
                    />
                    
                </div>
            </div>
        ) 
    }
}

export default AddTask;