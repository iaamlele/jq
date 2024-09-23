import {expect} from 'chai'
import $ from '../../src/index.js'

describe('Core class testing', () => {
    before(() => {
        document.body.innerHTML = '<div id="test-id" class="test-class">Test Element</div>'
    })

    it('should hide the element', function() {
        $('.test').hide();
        const node_list = document.getElementsByClassName('test-class');
        for(let i = 0; i < node_list.length; i++) {
            expect(node_list[i].style.visibility).to.be.equal('hidden');
        }
        
    })

})