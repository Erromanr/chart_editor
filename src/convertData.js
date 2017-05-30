export  default function convertData(data) {
    let series = [];
    let seriesTo = [];
    let seriesName = [];
    let finalSeries = [];
    let finalSeriesPie = [];
    let val = 0;

    let arr = data.slice(2);
    arr.map((item) => {
       let mass = [];
        item.map((item) => {
            if(!item.readOnly && item.value !== "") {
                if(item.label) {
                    seriesName.push(item.value);
                }
                else {
                mass.push(item.value);
                }
            }
        })
        seriesTo.push(mass);
    })
    seriesTo.map((item) => {
           if(val < item.length) {
                val = item.length;
            }
         })
    let value = seriesName.length > val ? seriesName.length : val;
    for(let i =0 ; i< value; i++) {
        for (let x=0 ; x< seriesTo.length ; x++) {
            if(seriesTo[x][i]) {
              finalSeriesPie.push({
                  data:seriesTo[x][i],
              })
            }
        }
        if(seriesName[i]){
            let data = [];
            for(let j=0;j<seriesName.length ; j++) {

                if(seriesTo[j][i]) {
                data.push(+seriesTo[j][i]);
                }
            }
               finalSeries.push({
                name:seriesName[i],
                data:data,
            })
        }

        else {
            let data = [];
            for (let y = 0 ; y< seriesTo.length ; y++) {
                if(seriesTo[y][i]){
                    data.push(+seriesTo[y][i]);
                }
            }
          finalSeries.push({
            data:data,
          })

        }

    }
    let mass = [];
    let name = data.slice(1,2);
    name[0].map( item  =>{
        if(!item.readOnly && item.value !== "" ) {
            mass.push(item.value);
        }}
    )

    return {
      nameList:mass,
      data:finalSeries,
      dataPie:finalSeriesPie,
    };
}
