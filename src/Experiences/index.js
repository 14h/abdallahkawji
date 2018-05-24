import React, {Component} from 'react';



import './index.css';

export default class Experiences extends Component{
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    
  }
  handleClick(event){
    let width = window.innerWidth || document.body.clientWidth;
    let clickable = document.getElementsByClassName('clickable')[0];
  
    if(event.clientY > clickable.getBoundingClientRect().y && event.clientY < clickable.getBoundingClientRect().y+80 && event.clientX < (width/2)+40 && event.clientX > (width/2)-40 ){
      clickable.click()
    }

    

  }
  componentDidMount() {
    document.addEventListener('click', this.handleClick);
   
  }
  render() {
    return (
        
        <div id="Experiences">
            <div className="experience_content">
                        <div className="dot"></div>
                        <div className="line"></div>
                        <div className="exp_holder">
                            <div className="date_box">
                                <div className="date_txt">2018</div>
                            </div>
                            <div className="exp_content exp_left exp_mid">
                                <span className="exp_title">Quality Assurance/ Tech Support</span><br/>
                                <span className="exp_work">Styla GmbH</span>
                            </div>
                            <div className="date_box">
                                <div className="date_txt">2016</div>
                            </div>
                            <div className="exp_content exp_right exp_mid">
                                <span className="exp_title">Quality Assurance Intern</span><br/>
                                <span className="exp_work">Styla GmbH</span>
                            </div>
                            <div className="date_box">
                                <div className="date_txt">2016</div>
                            </div>
                            <div className="exp_content exp_left exp_mid">
                                <span className="exp_title">Intern</span><br/>
                                <span className="exp_work">Soundcloud</span>
                            </div>
                            <div className="date_box">
                                <div className="date_txt">2015</div>
                            </div>
                            
                        </div>
                        <a className="icon_circle clickable" href="https://www.linkedin.com/in/kawji/" ><div className="icon_circle"></div></a>
                    </div>
                  
        </div>
      
    );
  }
}




