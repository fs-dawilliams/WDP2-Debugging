import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardItem from '../components/cards/CardItem';
import { FaSearch } from 'react-icons/fa';

function Landing() {
    const [fetchData, setFetchData] = useState([])
    const [searchResults, setSearchResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            .then((res) => {
                setFetchData(res.data);
            })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = fetchData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setSearchResults(filteredData)
        }
        else{
            setSearchResults(fetchData)
        }
    }

    return (
        <section style={styles.container}>
            <div style={styles.searchContainer}>
                <form style={styles.searchForm}>
                    <FaSearch style={styles.searchIcon} />
                    <input type="search" style={styles.searchBox} onChange={(e) => searchItems(e.target.value)} />
                </form>
            </div>
            
            <div style={styles.searchResults}>
                {searchInput.length > 1 ? (
                    searchResults.map((item) => {
                        return (
                            <CardItem 
                                price={item.price}
                                img={item.image}
                                title={item.title}
                                rating={item.rating.rate}
                            />
                        )
                    })
                ) : (
                    fetchData.map((item) => {
                        return (
                            <CardItem 
                                price={item.price}
                                img={item.image}
                                title={item.title}
                                rating={item.rating.rate}
                            />
                        )
                    })
                )}
            </div>
        </section>
    )
}
export default Landing;


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '2%',
    },
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '1.5rem',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: '1%'
    },
    searchForm: {
        display: 'inline-flex',
        flex: '1 1 300',
        width:400,
        border: '1 solid gray',
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'darkgray',
    },
    searchIcon: {
        paddingTop: 10,
        fontSize: '1.5rem',
    },
    searchBox: {
        border: 0,
        flex: 1,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        background: 'whitesmoke',
        color: 'gray'
    },
    searchResults: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }   
}