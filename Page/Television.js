import Page from './Page'
//const expect = require('expect');

class Televisions extends Page {
  get size_filter_dropdown() {
    return $(`button[data-which-button='screen_size-filter']`);
  }
  get size_filter_options() {
    return $$(`div[data-which-id="desktop-and-tablet-filters"] label[for^='screen_size'] span[data-test-element='bucketLabel']`);
  }
  get size_filter_done_button() {
    return $(`div[data-which-id='screen_size-filter-summary'] > button[data-which-id='done-button']`);
  }
  get size_filter_total_results(){
    return $(`div[data-which-id='screen_size-filter-summary'] > [data-which-id="total-items-count"]`);
  }
  get type_filter_dropdown() {
    return $(`button[data-which-button='screen_type-filter']`);
  }
  get type_filter_options() {
    return $$(`input[id^='screen_type_']`);
  }
  get type_filter_done_button() {
    return $(`div[data-which-id='screen_type-filter-summary'] > button[data-which-id='done-button']`);
  }
  get clear_filter_link(){
    return $(`div[data-test-element="clear-all"] > button > span`)
  }

  get loading_indicator(){
    return $(`div[data-test-element="loading-indicator"]`);
  }

  // Functions

  selectSizeFilterOption(option) {
    this.size_filter_dropdown.click();
    this.size_filter_options.forEach(($element) => {
      if ($element.getText().includes(option)) {
        $element.click();
       
        this.loading_indicator.waitForDisplayed(8000,true);
      }
    });
    //this.size_filter_done_button.waitForClickable();
    //this.size_filter_done_button.click();
  }

  getSelectedSizeFilterAmounts(){
    let total=0;
    this.size_filter_dropdown.click();
    this.size_filter_options.forEach(($element)=>{
      if ($element.getAttribute('class').includes('_1R-pz')){
        total = total + this.extractNumberFromBrackets($element.getText()); 
        console.log("Before "+$element.getText()+" Value from brackets "+ this.extractNumberFromBrackets($element.getText()));
      }
    })
    console.log("TOTAL "+ total);
    this.size_filter_done_button.click();
    return parseInt(total)
  }

  getTotalResultsForSizeFilter(){
    console.log("The totals is: " + this.size_filter_total_results.getText().match(/(\d+)/g));
    return  parseInt(this.size_filter_total_results.getText().match(/(\d+)/g));
  }

  extractNumberFromBrackets(value){
    return value.match(/(?<=\().+?(?=\))/g);
  }


  checkSelectedResultsMatchTotal(){
    expect().to.equal('Result totals do not match',);
  }

  clearAllFilters(){
   if(this.clear_filter_link.isExisting()){
    this.clear_filter_link.waitForClickable();
    this.clear_filter_link.click();
   }
   this.clear_filter_link.waitForDisplayed(10000,true);
  }


}

export default new Televisions();