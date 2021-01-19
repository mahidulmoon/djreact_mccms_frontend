import React, { Component } from 'react';
import { FaFan } from "react-icons/fa";
class Home extends Component {
    render() {
        return (
            <>
            <div className="container tm-features-section" id="features">
                <div className="row tm-features-row">
                    <section className="col-md-6 col-sm-12 tm-feature-block">
                    <header className="tm-feature-header">
                        
                        <h3 className="tm-feature-h"><FaFan /> Cras pretium diam ut metus</h3>
                    </header>
                    <p>
                        Pro Line HTML5 Template is brought to you by
                        <a rel="nofollow noopener" href="https://www.tooplate.com"
                        >Tooplate</a
                        >. This layout used Bootstrap v4.1.3 UI kit. You can easily modify
                        this template in any HTML editor for your site.
                    </p>
                    <p>
                        Sed interdum, purus vulputate congue luctus, lorem massa dignissim
                        nisi, sed condimentum nibh lorem quis lorem. Nulla sed erat
                        dignissim, tincidunt ante ac, egestas turpis.
                    </p>
                    </section>
                    <section className="col-md-6 col-sm-12 tm-feature-block">
                    <header className="tm-feature-header">
                        
                        <h3 className="tm-feature-h"><FaFan /> Cras pretium diam ut metus</h3>
                    </header>
                    <p>
                        Phasellus tristique, sapien quis mattis pellentesque, felis turpis
                        placerat turpis, nec viverra quam nisl at velit. Pellentesque
                        iaculis convallis egestas.
                    </p>
                    <p>
                        Nunc ut elit eget velit mollis sodales. Ut non mauris ut ligula
                        mattis consectetur. Aenean augue arcu, rhoncus at nibh nec, lacinia
                        blandit nulla.
                    </p>
                    </section>
                </div>
                </div>

            </>
        );
    }
}

export default Home;