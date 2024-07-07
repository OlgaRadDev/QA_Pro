const company = {
  name: 'Велика Компанія',
  type:'Головна компанія',
  platform: 'Платформа для продажу квитків',
  sellsSolution: 'Рішення для продажу квитків',
  clients: [
    {
      name: 'Клієнт 1',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків',
      partners: [
        {
          name: 'Клієнт 1.1',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
        },
        {
          name: 'Клієнт 1.2',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
          partners: [
            {
              name: 'Клієнт 1.2.3',
              type: 'subSubCompany',
              uses: 'Рішення для продажу квитків',
              sells: 'Рішення для продажу квитків',
            }
          ]
        }
      ]
    },
    {
      name: 'Клієнт 2',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків'
    }
  ]
};

let findValueByKey = function(company, companyName) {
  if (company.name === companyName) {
    for (let key in company) {
      if (company.hasOwnProperty(key)) {
        console.log(`${key}: ${company[key]}`)
      }
    }
    return;
  }

  if (company.clients) {
    for (let client of company.clients) {
      findValueByKey(client, companyName);
    }
  }
  
  if (company.partners) {
    for (let partner of company.partners){
      findValueByKey(partner, companyName);
    }
  }
}

findValueByKey(company, 'Клієнт 1.2.3')