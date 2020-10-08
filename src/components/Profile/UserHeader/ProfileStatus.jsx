import React from 'react';
import u from './UserHeader.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode:false,
        title: 'Yo'
    }

    activateEditMode = () => {
        this.setState( {
            editMode: true
        } )
    }

    deactivateEditMode = () => {
        this.setState( {
            editMode: false
        } )
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div className={u.h1}>
                        <span onDoubleClick={this.activateEditMode }>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;