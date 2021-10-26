const icona = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const select = document.querySelector(".select")
const container = document.querySelector(".cards")

select.addEventListener('change', printIcons)




function printIcons() {
    const categoria = select.value
    console.log(categoria);
    var iconeToDisplay=icona.filter((icona)=>{
        if(categoria=="all"){
            return true
        }
        if(icona.type==categoria){
            return true
        }else{
            return false
        }
    })

    container.innerHTML="";
    iconeToDisplay.forEach((icon, index, array)=>{
        
        var color = '';

        if (icon.type == 'animal'){
            color = 'blue';
        }else if (icon.type == 'vegetable'){
            color = 'orange';
        }else {
            color = 'purple';
        }

        const cardEl =`
        <div class="card">
        <i class="${icon.family} ${icon.prefix}${icon.name}" style="color:${color}"></i>  
        <p>${icon.name}</p>
        </div>
        `
        
        //  console.log(cardEl);
        container.innerHTML += cardEl;
    }  )
}
printIcons();