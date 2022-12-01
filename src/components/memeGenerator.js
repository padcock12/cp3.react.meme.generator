import React from 'react'

class MemeGenerator extends React.Component {
      constructor(props) {
                super(props);
                this.state = {
                    memeNumber: 82,
                    memeTitle: "Domino Effect",
                    memeImg: "https://i.imgflip.com/2oo7h0.jpg"
                }
                console.log("this.state")
                this.getMeme = this.getMeme.bind(this);
                this.randomMeme = this.randomMeme.bind(this);
            }
        
            async getMeme() {
                console.log(this)
                var url = 'https://api.imgflip.com/get_memes';
                var response = await fetch(url, {mode: 'cors'})
                console.log(response);
                var json = await response.json();
                console.log("This is the json");
                console.log(json);
                //console.log(this.state)
                console.log(json.data.memes[this.state.memeNumber].id);
                this.setState({memeTitle:json.data.memes[this.state.memeNumber].name, memeImg: json.data.memes[this.state.memeNumber].url});
                //this.state.memeTitle = json.data.memes[this.state.memeNumber].name
                //this.state.memeImg = json.data.memes[this.state.memeNumber].url //setState()
            }
                
            
        
            getRandom(min, max) {
              min = Math.ceil(min);
              max = Math.floor(max);
              return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and minimum are inclusive
            }
            randomMeme() {
              debugger
              //this.state.memeNumber = this.getRandom(1, 100)
              this.setState({memeNumber:this.getRandom(1,100)})
              this.getMeme();
            }
            
            render() {
                return (
                    <div>
                        <h1>Generate Your Own Meme!</h1>
                        <div id='randomButton'>
                            <button onClick={this.randomMeme} >Click this to generate a random meme prompt</button>
                            <h2>{this.state.memeTitle}</h2>
                            <img src={this.state.memeImg}></img>
                        </div>
                    </div>
                );
            }
        }
    
    export default MemeGenerator;