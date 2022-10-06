import React from "react";

class Pricing extends React.Component {
  state = {
    priceInputValue: "400000",
    priceInput: {
      0: "100000",
      1: "200000",
      2: "300000",
      3: "400000",
      4: "500000",
      5: "600000",
      6: "700000",
      7: "800000",
      8: "900000",
      9: "100000",
    },
  };

  slider = React.createRef();
  sliderValue = React.createRef();

  componentDidMount() {
    this.slider.current.setAttribute("min", 0);
    this.slider.current.setAttribute(
      "max",
      Object.keys(this.state.priceInput).length - 1
    );

    this.handleSliderValuePosition(this.slider.current);
  }

  handlePricingSlide = (e) => {
    this.setState({ priceInputValue: e.target.value });
    this.handleSliderValuePosition(e.target);
  };

  handleSliderValuePosition = (input) => {
    const multiplier = input.value / input.max;
    const thumbOffset = this.thumbSize * multiplier;
  };

  render() {
    return (
      <div className="pricing">
        <div className="pricing-slider center-content">
          <label className="form-slider">
            <span>How many users do you have?</span>
            <input
              type="range"
              ref={this.slider}
              defaultValue={this.state.priceInputValue}
              onChange={this.handlePricingSlide}
            />
          </label>
        </div>
        {/* 
        <div className="pricing-items">
          <div className="pricing-item">
            <div className="pricing-item-inner">
              <div className="pricing-item-content">
                <div className="pricing-item-header center-content">
                  <div className="pricing-item-title">Basic</div>
                  <div className="pricing-item-price">
                    <span className="pricing-item-price-currency">
                      {this.getPricingData(this.state.priceOutput.plan1, 0)}
                    </span>
                    <span className="pricing-item-price-amount">
                      {this.getPricingData(this.state.priceOutput.plan1, 1)}
                    </span>
                    {this.getPricingData(this.state.priceOutput.plan1, 2)}
                  </div>
                </div>
                <div className="pricing-item-features">
                  <ul className="pricing-item-features-list">
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li>Excepteur sint occaecat</li>
                    <li>Excepteur sint occaecat</li>
                  </ul>
                </div>
              </div>
              <div className="pricing-item-cta">
                <a className="button" href="http://cruip.com/">
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          <div className="pricing-item">
            <div className="pricing-item-inner">
              <div className="pricing-item-content">
                <div className="pricing-item-header center-content">
                  <div className="pricing-item-title">Advanced</div>
                  <div className="pricing-item-price">
                    <span className="pricing-item-price-currency">
                      {this.getPricingData(this.state.priceOutput.plan2, 0)}
                    </span>
                    <span className="pricing-item-price-amount">
                      {this.getPricingData(this.state.priceOutput.plan2, 1)}
                    </span>
                    {this.getPricingData(this.state.priceOutput.plan2, 2)}
                  </div>
                </div>
                <div className="pricing-item-features">
                  <ul className="pricing-item-features-list">
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                    <li className="is-checked">Excepteur sint occaecat</li>
                  </ul>
                </div>
              </div>
              <div className="pricing-item-cta">
                <a className="button" href="http://cruip.com/">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Pricing;
