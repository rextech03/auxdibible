"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import {getBibleVersions, getSearch, getChapter, getVerse} from '@/lib/actions'
import { SubmitButton } from "@/components/utils/Button"
import { useEffect, useState } from "react"
import axios from 'axios';
// import bookData from "@/lib/books"


const bookData =  {
  "KJV": [
    {
      "bookid": 1,
      "name": "Genesis",
      "chronorder": 1,
      "chapters": 50
    },
    {
      "bookid": 2,
      "name": "Exodus",
      "chronorder": 3,
      "chapters": 40
    },
    {
      "bookid": 3,
      "name": "Leviticus",
      "chronorder": 4,
      "chapters": 27
    },
    {
      "bookid": 4,
      "name": "Numbers",
      "chronorder": 5,
      "chapters": 36
    },
    {
      "bookid": 5,
      "name": "Deuteronomy",
      "chronorder": 6,
      "chapters": 34
    },
    {
      "bookid": 6,
      "name": "Joshua",
      "chronorder": 7,
      "chapters": 24
    },
    {
      "bookid": 7,
      "name": "Judges",
      "chronorder": 8,
      "chapters": 21
    },
    {
      "bookid": 8,
      "name": "Ruth",
      "chronorder": 9,
      "chapters": 4
    },
    {
      "bookid": 9,
      "name": "1 Samuel",
      "chronorder": 10,
      "chapters": 31
    },
    {
      "bookid": 10,
      "name": "2 Samuel",
      "chronorder": 11,
      "chapters": 24
    },
    {
      "bookid": 11,
      "name": "1 Kings",
      "chronorder": 15,
      "chapters": 22
    },
    {
      "bookid": 12,
      "name": "2 Kings",
      "chronorder": 28,
      "chapters": 25
    },
    {
      "bookid": 13,
      "name": "1 Chronicles",
      "chronorder": 12,
      "chapters": 29
    },
    {
      "bookid": 14,
      "name": "2 Chronicles",
      "chronorder": 16,
      "chapters": 36
    },
    {
      "bookid": 15,
      "name": "Ezra",
      "chronorder": 37,
      "chapters": 10
    },
    {
      "bookid": 16,
      "name": "Nehemiah",
      "chronorder": 38,
      "chapters": 13
    },
    {
      "bookid": 17,
      "name": "Esther",
      "chronorder": 36,
      "chapters": 16
    },
    {
      "bookid": 18,
      "name": "Job",
      "chronorder": 2,
      "chapters": 42
    },
    {
      "bookid": 19,
      "name": "Psalms",
      "chronorder": 13,
      "chapters": 150
    },
    {
      "bookid": 20,
      "name": "Proverbs",
      "chronorder": 17,
      "chapters": 31
    },
    {
      "bookid": 21,
      "name": "Ecclesiastes",
      "chronorder": 18,
      "chapters": 12
    },
    {
      "bookid": 22,
      "name": "Song of Solomon",
      "chronorder": 14,
      "chapters": 8
    },
    {
      "bookid": 23,
      "name": "Isaiah",
      "chronorder": 25,
      "chapters": 66
    },
    {
      "bookid": 24,
      "name": "Jeremiah",
      "chronorder": 29,
      "chapters": 52
    },
    {
      "bookid": 25,
      "name": "Lamentations",
      "chronorder": 30,
      "chapters": 5
    },
    {
      "bookid": 26,
      "name": "Ezekiel",
      "chronorder": 32,
      "chapters": 48
    },
    {
      "bookid": 27,
      "name": "Daniel",
      "chronorder": 33,
      "chapters": 12
    },
    {
      "bookid": 28,
      "name": "Hosea",
      "chronorder": 23,
      "chapters": 14
    },
    {
      "bookid": 29,
      "name": "Joel",
      "chronorder": 20,
      "chapters": 3
    },
    {
      "bookid": 30,
      "name": "Amos",
      "chronorder": 21,
      "chapters": 9
    },
    {
      "bookid": 31,
      "name": "Obadiah",
      "chronorder": 31,
      "chapters": 1
    },
    {
      "bookid": 32,
      "name": "Jonah",
      "chronorder": 19,
      "chapters": 4
    },
    {
      "bookid": 33,
      "name": "Micah",
      "chronorder": 22,
      "chapters": 7
    },
    {
      "bookid": 34,
      "name": "Nahum",
      "chronorder": 24,
      "chapters": 3
    },
    {
      "bookid": 35,
      "name": "Habakkuk",
      "chronorder": 27,
      "chapters": 3
    },
    {
      "bookid": 36,
      "name": "Zephaniah",
      "chronorder": 26,
      "chapters": 3
    },
    {
      "bookid": 37,
      "name": "Haggai",
      "chronorder": 34,
      "chapters": 2
    },
    {
      "bookid": 38,
      "name": "Zechariah",
      "chronorder": 35,
      "chapters": 14
    },
    {
      "bookid": 39,
      "name": "Malachi",
      "chronorder": 39,
      "chapters": 4
    },
    {
      "bookid": 40,
      "name": "Matthew",
      "chronorder": 40,
      "chapters": 28
    },
    {
      "bookid": 41,
      "name": "Mark",
      "chronorder": 58,
      "chapters": 16
    },
    {
      "bookid": 42,
      "name": "Luke",
      "chronorder": 52,
      "chapters": 24
    },
    {
      "bookid": 43,
      "name": "John",
      "chronorder": 66,
      "chapters": 21
    },
    {
      "bookid": 44,
      "name": "Acts",
      "chronorder": 54,
      "chapters": 28
    },
    {
      "bookid": 45,
      "name": "Romans",
      "chronorder": 46,
      "chapters": 16
    },
    {
      "bookid": 46,
      "name": "1 Corinthians",
      "chronorder": 44,
      "chapters": 16
    },
    {
      "bookid": 47,
      "name": "2 Corinthians",
      "chronorder": 45,
      "chapters": 13
    },
    {
      "bookid": 48,
      "name": "Galatians",
      "chronorder": 41,
      "chapters": 6
    },
    {
      "bookid": 49,
      "name": "Ephesians",
      "chronorder": 47,
      "chapters": 6
    },
    {
      "bookid": 50,
      "name": "Philippians",
      "chronorder": 49,
      "chapters": 4
    },
    {
      "bookid": 51,
      "name": "Colossians",
      "chronorder": 50,
      "chapters": 4
    },
    {
      "bookid": 52,
      "name": "1 Thessalonians",
      "chronorder": 42,
      "chapters": 5
    },
    {
      "bookid": 53,
      "name": "2 Thessalonians",
      "chronorder": 43,
      "chapters": 3
    },
    {
      "bookid": 54,
      "name": "1 Timothy",
      "chronorder": 55,
      "chapters": 6
    },
    {
      "bookid": 55,
      "name": "2 Timothy",
      "chronorder": 59,
      "chapters": 4
    },
    {
      "bookid": 56,
      "name": "Titus",
      "chronorder": 57,
      "chapters": 3
    },
    {
      "bookid": 57,
      "name": "Philemon",
      "chronorder": 51,
      "chapters": 1
    },
    {
      "bookid": 58,
      "name": "Hebrews",
      "chronorder": 53,
      "chapters": 13
    },
    {
      "bookid": 59,
      "name": "James",
      "chronorder": 48,
      "chapters": 5
    },
    {
      "bookid": 60,
      "name": "1 Peter",
      "chronorder": 56,
      "chapters": 5
    },
    {
      "bookid": 61,
      "name": "2 Peter",
      "chronorder": 60,
      "chapters": 3
    },
    {
      "bookid": 62,
      "name": "1 John",
      "chronorder": 61,
      "chapters": 5
    },
    {
      "bookid": 63,
      "name": "2 John",
      "chronorder": 62,
      "chapters": 1
    },
    {
      "bookid": 64,
      "name": "3 John",
      "chronorder": 63,
      "chapters": 1
    },
    {
      "bookid": 65,
      "name": "Jude",
      "chronorder": 64,
      "chapters": 1
    },
    {
      "bookid": 66,
      "name": "Revelation",
      "chronorder": 65,
      "chapters": 22
    },
    {
      "bookid": 67,
      "name": "1 Esdras",
      "chronorder": 67,
      "chapters": 15
    },
    {
      "bookid": 68,
      "name": "Tobit",
      "chronorder": 68,
      "chapters": 14
    },
    {
      "bookid": 69,
      "name": "Judith",
      "chronorder": 69,
      "chapters": 16
    },
    {
      "bookid": 74,
      "name": "1 Maccabees",
      "chronorder": 74,
      "chapters": 16
    },
    {
      "bookid": 75,
      "name": "2 Maccabees",
      "chronorder": 75,
      "chapters": 15
    },
    {
      "bookid": 70,
      "name": "Wisdom",
      "chronorder": 70,
      "chapters": 19
    },
    {
      "bookid": 71,
      "name": "Sirach",
      "chronorder": 71,
      "chapters": 51
    },
    {
      "bookid": 73,
      "name": "Baruch",
      "chronorder": 73,
      "chapters": 5
    },
    {
      "bookid": 88,
      "name": "Azariah",
      "chronorder": 88,
      "chapters": 1
    },
    {
      "bookid": 78,
      "name": "Susanna",
      "chronorder": 78,
      "chapters": 1
    },
    {
      "bookid": 76,
      "name": "Prayer of Manasseh",
      "chronorder": 76,
      "chapters": 1
    },
    {
      "bookid": 79,
      "name": "Bel and Dragon",
      "chronorder": 79,
      "chapters": 1
    },
    {
      "bookid": 72,
      "name": "Epistle of Jeremiah",
      "chronorder": 72,
      "chapters": 1
    },
    {
      "bookid": 77,
      "name": "2 Esdras",
      "chronorder": 77,
      "chapters": 16
    },
    {
      "bookid": 83,
      "name": "Prayer of Manasseh",
      "chronorder": 83,
      "chapters": 1
    }
  ],
}

export default  function Home() {
  const [search, setSearch] = useState('The lord gave the word');

  const [bibleVersions, setBibleVersions] = useState([]);

  const [searchResults, setSearchResults] = useState(null);
  const [specificVerseData, setSpecificVerseData] = useState();
  const [bibleQuote, setBibleQuote] = useState([]);
  const [articles, setArticles] = useState([]);
  const [versedata, setVerseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const[book, setBook] = useState();
  const[chapter, setChapter] = useState();
  const[verse, setVerse] = useState();
  const [error, setError] = useState("");
  const[bookRes, setBookRes] = useState([]);
 
  const fetchSearchVerse = async () => {
    setLoading(true);
    try {
        const result = await axios(
        `https://bolls.life/find/YLT/?search=${search}&match_case=false&match_whole=true`
        );
        setArticles(result.data);

        // let list = [];
       // Extract "chapter" values from the API response
        const apiChapters = result.data.map(item => item.book);
        // ['Revelation', 'genesis']
        // Check for matches and log corresponding 'name' values
        apiChapters.forEach(apiChapter => {
          const matchingBookEntry = bookData.KJV.find(bookEntry => bookEntry.bookid === apiChapter);
          // list.append(matchingBookEntry.name);
      // console.log(list)
          if (matchingBookEntry) {
            setBookRes([...bookRes, matchingBookEntry.name])
            console.log(matchingBookEntry.name)
          }

      });

        // console.log(apiChapters);

        // setBibleQuote(result.data.results.chapter_verse);
        
        // setVerse(result.data.results.chapter_verse);
        console.log(articles);
        // setChapter(result.data.results.chapter_verse);
        // setVerse(result.data.results.chapter_verse);
        setLoading(false);
    } catch (error) {
        setError(error);
    }
    };
console.log(bookRes);
  useEffect(() => {

       
        fetchSpecificVerse();
    
  }, [verse]); // eslint-disable-line react-hooks/exhaustive-deps



  const fetchSearch = async (e) => {
    e.preventDefault();
    try {
        await axios(`https://bolls.life/find/YLT/?search=${search}&match_case=false&match_whole=true`);
        fetchSearchVerse();
    } catch (error) {
        console.log(error);
    }
};





const fetchSpecificVerse = async () => {
 
    try {
        const result = await axios(
        `https://bible-api.com/john 2:16`
        );
        let data = result.data.verses.Json();
        setSpecificVerseData(result.data.verses);
        console.log(data);
        // setChapter(result.data.results.chapter_verse);
        // setVerse(result.data.results.chapter_verse);
        setLoading(false);
    } catch (error) {
        setError(error);
    }    
};
  
  let counter = 0;
  return (
    <main className="flex min-h-screen items-center justify-between p-24">
     
      
      <div className="w-1/4">
       <h4>Find By Phrase</h4>
       <form onSubmit={fetchSearch} className="flex w-full max-w-sm items-center space-x-2">
      <Input  onChange={(e) => setSearch(e.target.value)} type="text" placeholder="The lord gave the word" name="search"/>
      <SubmitButton />
    </form>
    {search}

    {articles?.map((searchResult) => (
     
        <div key={counter++}>
         
          <p >{bookRes} &nbsp; {searchResult.chapter} : {searchResult.verse}</p>
          <p>{searchResult.text}</p>
        
        </div>
         ))}

      </div>
     
    </main>
  );
}
