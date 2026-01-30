
    // Onload
    var currentLanguage = 'it'; // Default language is Italian
    var idParam;
    var bidParam;
    var languageText = {
        'en': {
            'and': 'and',
            'date': '05 Sept 2025',
            'location': 'CIVENNA DI BELLAGIO • LAKE COMO'
            
        },
        'it': {
            'and': 'e',
            'date': '05 Set 2025',
            'location': 'CIVENNA DI BELLAGIO • LAGO DI COMO'

        }
        // Add more languages as needed
    };


        document.getElementById("language-toggle").addEventListener("click", function () {
            // Toggle between English and it
            currentLanguage = (currentLanguage === 'en') ? 'it' : 'en';
            // Update the greeting text and flag image
            //var languageButtonElement = document.getElementById('languageButton');

            //languageButtonElement.innerText = currentLanguage;
            //flagImageElement.alt = currentLanguage;

            changeLanguage()
        })

        function changeLanguage() {
            for (const [key, value] of Object.entries(languageText[currentLanguage])) {

                if (key == "emailDescription") {
                    document.querySelector("#mail").placeholder = value;
                }
                else if (key == "addressDescription") {
                    document.querySelector("#enterAddress").placeholder = value;
                }
                else
                    document.getElementById(key).innerText = value;
            }
        }