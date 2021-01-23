import React, { Component } from 'react';

class SelectItem extends Component {
    valuation = (event) => {
        event.preventDefault();
        var priceOfService = document.getElementById("choosenServ");
        var metres = document.getElementById("metres");
        var km = document.getElementById("km");
        var priceOfValuation = priceOfService.value*metres.value+50+(0.5*km.value);
        this.props.valuation(priceOfValuation);
    }

    render(){
    const services = this.props.services.map((service) => {
        return <option value={service.price}>{service.name}</option>
    })


    return(
        <div class="w-100 d-flex justify-content-around mx-auto">
            <form onSubmit={this.valuation}>
                <select id="choosenServ">
                    {services}
                </select>
                <input type="number" id="metres" min="1" placeholder="m²" />
                <input type="number" id="km" min="1" placeholder="odległość (w km)" />
                <input type="submit" value="Oblicz" />
            </form>
            
        </div>
    )
}
}

export default SelectItem;
