import React, {useState, useEffect}from 'react'
import './index.css'
import ProductCard from '../ProductCard'

const Products = () => {
    const [productList, setProductsList] = useState([])
   
    const [params, setParams] = useState({
      recommend:'',
      newestFirst:'',
      popular:'',
      highToLow:'',
      lowToHigh:''
    })
    const [showFilter, setShowFilter] = useState(false)
    const url = `https://fakestoreapi.com/products`
    useEffect(() =>{getProducts(url)})

    const getProducts = async() =>{
        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            setProductsList(data)
        } catch (error) {
        }
    }
  const filterText = showFilter ? '< HIDE FILTER' : '> SHOW FILTER'

const FilterComponent = () => (
  <div className='filter-container'>
    <input type="checkbox" id='customizable' className='custom-input'/>
    <label className='filter-headings' htmlFor='customizable'>customizable</label>
    <hr className='break'/>
    <div className='dropdown'>
      <div>
      <p className='filter-headings'>ideal for</p>
      <p>All</p>
      </div>
      <select className='filter-select'>
        <p className='unselect'>Unselect all</p>
      </select>
    </div>
    <hr className='break'/>
    <div className='dropdown'>
      <div>
      <p className='filter-headings'>occasion</p>
      <p>All</p>
      </div>
      <select className='filter-select'>
        <p className='unselect'>Unselect all</p>
      </select>
    </div>
    <hr className='break'/>
    <div className='dropdown'>
      <div>
      <p className='filter-headings'>work</p>
      <p>All</p>
      </div>
      <select className='filter-select'>
        <p className='unselect'>Unselect all</p>
      </select>
    </div>
    <hr className='break'/>
    <div className='dropdown'>
      <div>
      <p className='filter-headings'>fabric</p>
      <p>All</p>
      </div>
      <select className='filter-select'>
        <p className='unselect'>Unselect all</p>
      </select>
    </div>
    <hr className='break'/>
    <div className='dropdown'>
      <div>
      <p className='filter-headings'>segment</p>
      <p>All</p>
      </div>
      <select className='filter-select'>
        <p className='unselect'>Unselect all</p>
      </select>
    </div>
    <hr className='break'/>
    <div className='dropdown'>
      <div>
      <p className='filter-headings'>suitable for</p>
      <p>All</p>
      </div>
      <select className='filter-select'>
        <p className='unselect'>Unselect all</p>
      </select>
    </div>
    <hr className='break'/>
    <div className='dropdown'>
      <div>
      <p className='filter-headings'>raw materials</p>
      <p>All</p>
      </div>
      <select className='filter-select'>
        <p className='unselect'>Unselect all</p>
      </select>
    </div>
    <hr className='break'/>
    <div className='dropdown'>
      <div>
      <p className='filter-headings'>pattern</p>
      <p>All</p>
      </div>
      <select className='filter-select'>
        <p className='unselect'>Unselect all</p>
      </select>
    </div>
    <hr className='break'/>
  </div>
)

  return (
    <div>
      <div className='mobile-filter-container'>
        <div className='mobile-filter'>
        <p className='filter'>filter</p>
        <div className='vertical-line-2'></div>
        </div>
        <div className='desktop-filter'>
          <p className='items-count'>{productList.length} ITEMS</p>
          <p className='show-hide-filter' onClick={() =>setShowFilter(!showFilter)}>{filterText}</p>
        </div>
        <select className='select' onChange={()=> setParams({...params,})}>
          <option selected value={'recommended'}>recommended</option>
          <option value={'order_by=date DESC'}>newest first</option>
          <option value={'popular'}>popular</option>
          <option value={'order_by=price DESC'}>price : high to low</option>
          <option value={'order_by=price ASC'}>price : low to high</option>
        </select>
      </div>
      <div className='filter-products-container'>
        {showFilter && <FilterComponent/>}
        <div className='cards-conatainer'>
      <ul className='products'>
        {productList.map(each => <li key={each.id} className='list-item'>
            <ProductCard each={each}/>
        </li>)}
      </ul>
      </div>
      </div>
    </div>
  )
}

export default Products
