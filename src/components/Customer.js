import React from 'react';

class Customer extends React.Component {
    render(){
        return(
            <div>
                <CustomerProfile 
                id={this.props.id}
                image={this.props.image}
                name={this.props.name}>
                </CustomerProfile>
                <Customerinfo
                birthday={this.props.birthday}
                gender={this.props.gender}
                job={this.props.job}>
                </Customerinfo>
            </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render(){
        return(
            <div>
                <h2>({this.props.id}) 이름: {this.props.name}</h2>
                <img src= {this.props.image} alt="profile"></img>
            </div>
        )
    }
}

class Customerinfo extends React.Component {
    render(){
        return(
            <div>
               <p>{this.props.birthday}</p>
               <p>{this.props.gender}</p>
               <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;