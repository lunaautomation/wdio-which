const sizes = [`55-60"`];
import Televisions from '../../Pages/Television';

describe('Check the size filter for televisions shows the correct results', () => {
    before(() => {
        browser.url('/reviews/televisions');
    });
    sizes.forEach((size) => {
        it(`should show the correct filter total amount for ${size} Televisions`, () => {
            Televisions.clearAllFilters();
            Televisions.selectSizeFilterOption(size);
            let amountSelected = Televisions.getSelectedSizeFilterAmounts();
            let amountShown = Televisions.getTotalResultsForSizeFilter();
            expect(amountSelected, `The item(s) selected ${amountSelected} do not equal the amount shown in the filter total ${amountShown}`).to.equal(amountShown);
        });
    });
});

describe('Check the Type filter for televisions shows the correct results', () => { });


describe('Check the price range for televisions shows the correct results', () => { });