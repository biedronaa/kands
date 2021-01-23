import React, {Component} from 'react'
import axios from 'axios';
import SelectItem from './SelectItem'

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [],
            mess: ""
        }
    }

    componentDidMount(){
        axios.get("http://localhost:4000/service").then(res => {
            this.setState({
            services: res.data
            })
        })
    }

    choose = (price) => {
        if(price<150){
            this.setState({
                mess: "Przybliżony koszt zlecenia to: "+price+"zł. Niestety, ale wycenione zlecenie nie przekracza naszego minimalnego progu."
            })
        }
        else {
            this.setState({
                mess: "Przybliżony koszt zlecenia to: "+price+"zł. Zapraszamy do kontaktu!"
            })
        }
    }

    render(){
        const { services } = this.state;
        return (
            <div class="bg-light mt-5">
                <h3>Wycena usługi</h3>
                <div class="mt-3">
                    <SelectItem services={services} valuation={this.choose.bind(this)}/>
                    <div class="ms-4 mt-3">
                    <p class="ms-2">{this.state.mess}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator