import React from "react";

// load assets
import "../../assets/css/currency.scss";

const Currency = ({ img, currencyName, currencyTotalName, dollar, percent, className}) => {
  return (

        <div className="currency">
            <div className="imgName">
                <div className="img">
                    <img src={img} />
                </div>
                <div className="currencyName">
                    {currencyName}
                </div>
                <div className="currencyTotalName">
                    {currencyTotalName}
                </div>
            </div>
                <div className="dollar">
                    {dollar}
                </div>
                {(percent).indexOf("-")>=0 ? (
                     <div className="percent" style={{color:"#F6465D"}}>
                        {percent}
                    </div>   
                    ) : (
                        <div className="percent">
                            {percent}
                        </div>  
                    )
                }
                
            
        </div>
   
    
  );
};

export default Currency;
