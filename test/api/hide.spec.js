import {expect} from 'chai'
import $ from '../../src/index.js'

describe('Core class testing', () => {
    before(() => {
        document.body.innerHTML = '<div class="test">Test Element</div>'
    })

    it('should hide the element', function() {
        const element = $('.test').hide();
        expect(document.querySelectorAll('.test').style.visibility).to.be.equal('hidden');
    })
})