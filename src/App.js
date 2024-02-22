import "./App.css";
import Header from "./layouts/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import CarousselSfectoria from "./components/CarousselSfectoria";
import AllCards from "./components/AllCards";
import Allpacks from "./components/Allpacks";
import Formulaire from "./pages/Formulaire";
import { Component } from "react";
import FooterSfectoria from "./layouts/FooterSfectoria";
import Categories from "./components/Categories";
import OurTeachers from "./components/OurTeachers";
import OneReview from "./components/reviews/OneReview";
import AllReviews from "./components/reviews/AllReviews";
import AboutHome from "./components/AboutHome";
import Home from "./pages/home/Home";




class App extends Component {
  constructor() {
    super()
    this.state = {
      showform: false,
      selectedItem: {}
    };
    this.showHome = this.showHome.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  showHome() {
    this.setState({ showform: false });
  }
  showForm(item) {
    this.setState({ showform: true, selectedItem: item });
  }

  render() {
    return (
      <div>
         
        <Header />
        
        
        {this.state.showform === false ? (
          <Home showForm={this.showForm} />
        ) : (
          <Formulaire showHome={this.showHome} selectedItem={this.state.selectedItem} />
        )}
  
        <FooterSfectoria />
        



      </div>


    );
  }
}

export default App;