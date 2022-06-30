describe("Utilities test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
    });

    it('should sum total tips of all payments', function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(60);
    });

    it('should sum total bills of all payments', () => {
        expect(sumPaymentTotal('billAmt')).toEqual(100);
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(300);
    });

    it('should sum total tip percent on sumPaymentTotal()',()=>{
        expect(sumPaymentTotal('tipPercent')).toEqual(20);
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });

    it('should calculate tip percent of one transaction', ()=>{
        expect(calculateTipPercent(50, 25)).toEqual(50);
    });

    it('should generate a td from value and append to tr on appendTd(tr, value)',()=>{
        newTr = document.createElement('tr');
        appendTd(newTr,'test');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });

    

    afterEach(()=>{
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
})
