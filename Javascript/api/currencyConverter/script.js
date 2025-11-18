
import {add,f3} from './currency.js';
import a from './currency.js';

console.log(add(2,3));


const currencyCodes = [
	"AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BYR","BZD","CAD","CDF","CHF","CLF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VEF","VND","VUV","WST","XAF","XAG","XAU","XCD","XDR","XOF","XPF","YER","ZAR","ZMK","ZMW","ZWL","XPT","XPD","BTC","ETH","BNB","XRP","SOL","DOT","AVAX","MATIC","LTC","ADA"
];

async function currencyConverter(amount, fromCurrency, toCurrency) {
    const apiKey = 'cur_live_EvODIv49arOVwwc4tx41mKrrP6r4nORGbxzbeFoa';
    const apiUrl = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&currencies=${toCurrency}&base_currency=${fromCurrency}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        // The API response has the exchange rates under data[<currency>].value
        if (data.data && data.data[toCurrency] && data.data[toCurrency].value) {
            const exchangeRate = data.data[toCurrency].value;
            const convertedAmount = amount * exchangeRate;
            console.log(convertedAmount);
            return convertedAmount;
        } else {
            throw new Error('Invalid currency');
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

const onSubmit = async () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if(toCurrency === fromCurrency){
        alert("Please select different currencies");
        return;
    }

    if(isNaN(amount) || amount <= 0){
        alert("Please enter a valid amount");
        return;
    }

    const newAmount = await currencyConverter(amount, fromCurrency, toCurrency);
    document.getElementById('result').innerHTML = `<p>Converted Amount: ${newAmount} ${toCurrency}</p>`;
};


const addOptions = () =>{
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    
    currencyCodes.forEach(code => {
        const option1 = document.createElement('option');
        option1.value = code;
        option1.text = code;
        fromCurrency.appendChild(option1);
    });

    currencyCodes.forEach(code => {
        const option2 = document.createElement('option');
        option2.value = code;
        option2.text = code;
        toCurrency.appendChild(option2);
    });
}


addOptions();