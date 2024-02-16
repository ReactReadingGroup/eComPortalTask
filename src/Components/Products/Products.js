import React from "react";
import { CarObj } from './../../CarObj';
import './Products.css';



function Products() {
    return (
        <>
            <div className="main">
                <div className="row">
                    <div className="col-md-3 card">
                        <div className="cardImg">
                            <img src={CarObj[0].image} height="200px" width="200px" alt={CarObj[0].make} />
                        </div>
                        <div>
                            <span>Make:  {CarObj[0].make}</span><br/>
                            <span>Model: {CarObj[0].model}</span><br/>
                            <span>Year:  {CarObj[0].year}</span><br/>
                            <span>Cost: ${CarObj[0].price}</span><br/>
                        </div>
                    </div>
                    <div className="col-md-3 card">
                        <div className="cardImg">
                            <img src={CarObj[1].image} height="200px" width="200px" alt={CarObj[1].make} />
                        </div>
                        <div>

                            <span>Make:  {CarObj[1].make}</span><br/>
                            <span>Model: {CarObj[1].model}</span><br/>
                            <span>Year:  {CarObj[1].year}</span><br/>
                            <span>Cost: ${CarObj[1].price}</span><br/>
                        </div>
                    </div>
                    <div className="col-md-3 card">
                        <div className="cardImg">
                            <img src={CarObj[2].image} height="200px" width="200px" alt={CarObj[2].make} />
                        </div>
                        <div>

                            <span>Make:  {CarObj[2].make}</span><br/>
                            <span>Model: {CarObj[2].model}</span><br/>
                            <span>Year:  {CarObj[2].year}</span><br/>
                            <span>Cost: ${CarObj[2].price}</span><br/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 card">
                        <div className="cardImg">
                            <img src={CarObj[3].image} height="200px" width="200px" alt={CarObj[3].make} />
                        </div>
                        <div>
       
                            <span>Make:  {CarObj[3].make}</span><br/>
                            <span>Model: {CarObj[3].model}</span><br/>
                            <span>Year:  {CarObj[3].year}</span><br/>
                            <span>Cost: ${CarObj[3].price}</span><br/>
                        </div>
                    </div>
                    <div className="col-md-3 card">
                        <div className="cardImg">
                            <img src={CarObj[4].image} height="200px" width="200px" alt={CarObj[4].make} />
                        </div>
                        <div>
                            <span>Make:  {CarObj[4].make}</span><br/>
                            <span>Model: {CarObj[4].model}</span><br/>
                            <span>Year:  {CarObj[4].year}</span><br/>
                            <span>Cost: ${CarObj[4].price}</span><br/>
                        </div>
                    </div>
                    <div className="col-md-3 card">
                        <div className="cardImg">
                            <img src={CarObj[5].image} height="200px" width="200px" alt={CarObj[5].make} />
                        </div>
                        <div>
                            <span>Make:  {CarObj[5].make}</span><br/>
                            <span>Model: {CarObj[5].model}</span><br/>
                            <span>Year:  {CarObj[5].year}</span><br/>
                            <span>Cost: ${CarObj[5].price}</span><br/>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Products;