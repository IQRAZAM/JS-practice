
            let char = [{
                "category": "Programming",
                "type": "single",
                "joke": "Your momma is so fat, you need to switch to NTFS to store a picture of her.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": true
                },
                "id": 55,
                "safe": false,
                "lang": "en"
            },
            {
                "category": "Misc",
                "type": "twopart",
                "joke": "Mom asked me where I'm taking her to go out to eat for mother's day.",
                "joke": "I told her, \"We already have food in the house\".",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 88,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "If Bill Gates had a dime for every time Windows crashed ... Oh wait, he does.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 22,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "twopart",
                "joke": "Programming is like sex.",
                "joke": "Make one mistake and you end up supporting it for the rest of your life.",
                "flags": {
                    "nsfw": true,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": true
                },
                "id": 8,
                "safe": false,
                "lang": "en"
            },
            {
                "category": "Misc",
                "type": "twopart",
                "joke": "The average penis has...",
                "joke": "Been in and around my ex-girlfriend's mouth.\nFuck you, Karen!",
                "flags": {
                    "nsfw": true,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": true
                },
                "id": 66,
                "safe": false,
                "lang": "en"
            },
            {
                "category": "Dark",
                "type": "twopart",
                "joke": "9/11 jokes are not funny.",
                "joke": "The other 2 though, are hilarious!",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": true,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 77,
                "safe": false,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "twopart",
                "joke": "What is the best prefix for global variables?",
                "joke": "//",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 32,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Misc",
                "type": "twopart",
                "joke": "I used to love to tell dad jokes.",
                "joke": "Dad, come back...",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 63,
                "safe": false,
                "lang": "en"
            },
            {
                "category": "Pun",
                "type": "twopart",
                "joke": "What do you call crystal clear urine?",
                "joke": "1080p.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": true
                },
                "id": 69,
                "safe": false,
                "lang": "en"
            },
            {
                "category": "Pun",
                "type": "twopart",
                "joke": "I asked my wife if I was the only one she's been with.",
                "joke": "She said, \"Yes, the others were at least sevens or eights.\"",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 58,
                "safe": true,
                "lang": "en"
            }
        ]
    


    let index = Math.floor(Math.random() * (char.length - 1))
    console.log(index)
    joke.innerHTML= char[index].joke
    
    