const key='cutprice'

if(!localStorage.getItem(key)){

	let data={
		goods:[
		{
			id:'goods1',
			name:'信远斋酸梅汤',
			price:230
		},
		{
			id:'goods2',
			name:'汤岗子矿泉水',
			price:560
		},
		{
			id:'goods3',
			name:'御泉杏仁露',
			price:350
		}
		]
	}

	 localStorage.setItem(key, JSON.stringify(data));
}

 export default {
 	fetch () {
        return JSON.parse(localStorage.getItem(key));
    },
    save (store) {
        localStorage.setItem(key, JSON.stringify(store));
    }
 }