import { IProduct } from '@/interfaces/product'
import { getAllProducts } from '@/services/product'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import Share from '@/assets/icons/compare-svgrepo-com 1.svg'
const News = () => {
  const {data: products , isLoading , isError } = useQuery({
    queryKey: ["PRODUCTS_KEY"],
    queryFn: getAllProducts
  })
  if(isLoading) return <p>Loading...</p>
  if(isError) return <p>Error</p>
  return (
    <div>
      <section className="news">
      <div className="container">
  <div className="section-heading">
    <h2 className="section-heading__title">New</h2>
  </div>
  <div className="section-body">
    <div className="product-list">
      <div className="product-item">
        <div className="product-image">
          <img src="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GF8YSqYjcs-Q8sUX0yO-9gAKtOxpszRbqSCTy1LZiI3PIjF0vPuChIdIsL4Y45A7PJlVfnBvnw6KGGfrOnGxdhQRreWjqsshPLYAIF4Y6lxak-7UtxEK5R0-BTb7r1wKT2nUnRU6Yz-RLJsNxIYme6QvTjzAMWyZPzQddyazZ0X66mdS-u9agwYxpg5J~7XskJKPkflD7sJCbzJcKLIEHFgykhQ4IT6xQZutVR6RrPxXUTuf4B3BHs-pmHTupRA7XdNv4jrqDOIFJvZ5BfTsU8Huttvm6Nrbgaz5fmzBhIkAFgo--e1xvRrmQW9ZJTFeWhodfc7QCKNZUqEnKvO7Pg__"  className="product__thumbnail" />
          <span className="product-sale">30%</span>
        </div>
        <div className="product-info">
          <h3 className="product__name">
            <a  className="product__link">Syltherine</a>
          </h3>
          <a  className="product__category">Stylish cafe chair</a>
          <div className="product-price">
            <span className="product-price__new">2.500.000đ</span>
            <span className="product-price__old">3.500.000đ</span>
          </div>
        </div>
        <div className="product-actions">
          <button className="btn product-action__quickview">Quick View</button>
          <button className="btn product-action__addtocart">Add To Cart</button>
          <div className="product-actions-more">
            <span className="product-action__share">Share</span>
            <span className="product-action__compare">Compare</span>
            <span className="product-action__like">Like</span>
          </div>
        </div>
      </div>
      {/*End .product-item*/}
      <div className="product-item">
        <div className="product-image">
          <img src="https://s3-alpha-sig.figma.com/img/3ed3/53ed/bdb0310fb379a6b1828809d2c0652533?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n8w49DkWsd6y1zhYFTVtm5evPazfDGaj8qLv7yEcYIsGc0GeWiE0fUW-Rt2F2y~I-pZeHC2RB-pkgp8Hq-Y~m3Okvb8JmMtht8ZJ4PT~WUtIYHttk~-9vokvgESHFLroy6TkaUrBiWoSbs1BhuT6L7bfKBcubUPbDRyD17FWndIV4megCbMjA2H9vqwfmtGFdETJaJF-epE62UlB2CwVDymAhsK2-KRWqggl7yKtdiPa6ra1z~3mi1xLc6QqbzXeXcoXlZeBkrco7vpz1JhTCEVrhoxz8e~LNz0APt3AaCmMgg0jHgCt81azMqOjRGCAEfOLSFANOmR-TIhLU5EVtA__"  className="product__thumbnail" />
          <span className="product-new">New</span>
        </div>
        <div className="product-info">
          <h3 className="product__name">
            <a  className="product__link">Leviosa</a>
          </h3>
          <a  className="product__category">Stylish cafe chair</a>
          <div className="product-price">
            <span className="product-price__new">2.500.000đ</span>
            <span className="product-price__old"></span>
          </div>
        </div>
        <div className="product-actions"> 
          <button className="btn product-action__quickview">Quick View</button>
          <button className="btn product-action__addtocart">Add To Cart</button>
          <div className="product-actions-more">
            <span className="product-action__share">Share</span>
            <span className="product-action__compare">Compare</span>
            <span className="product-action__like">Like</span>
          </div>
        </div>
      </div>
      {/*End .product-item*/}
      <div className="product-item">
        <div className="product-image">
          <img src="https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dc1ap6OGUZuxOGU~KdOkcwwaxBn2T4MOqM2cmnd47tf2~gumS~DEhdfgqg2il0C-vX4ZOxuWJMJKjN6oT~x3hBwfD~CVascPsC58rKv4-2au7RpRxHhz-32QwLdHQHboy0~cUoL-gEPFrOLfU~bpmACZGKZJ1LwdkjOIpW51ucB-vlE6TIVwkEffw8gky~x7VyUkdSwlrdonHWA9ZmH4rksOCOuTShKjWEZUDLl5PkuGguGXd8J4VwjZaLZreMX3I~rReRbQO5U15-n5g6I5oI5cBagG1R7pBMXLY7Du8vkUQz1hmD02s533JEfuzr5aHLLvINg~xu05wx0uFO-fIw__"  className="product__thumbnail" />
        </div>
        <div className="product-info">
          <h3 className="product__name">
            <a  className="product__link">Lolito</a>
          </h3>
          <a  className="product__category">Luxury big sofa</a>
          <div className="product-price">
            <span className="product-price__new">7.000.000đ</span>
            <span className="product-price__old">14.000.000đ</span>
          </div>
        </div>
        <div className="product-actions">
          <button className="btn product-action__quickview">Quick View</button>
          <button className="btn product-action__addtocart">Add To Cart</button>
          <div className="product-actions-more">
            <span className="product-action__share">Share</span>
            <span className="product-action__compare">Compare</span>
            <span className="product-action__like">Like</span>
          </div>
        </div>
      </div>
      {/*End .product-item*/}
      <div className="product-item">
        <div className="product-image">
          <img src="https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=edDPaRMoNzFgPGmbpieqyoqzRWQf56E-RXodl2UYDRtkOHwWlUEIH1zVdWCpeB3yj69Ao8u4x0JYRMQi6Vb3QMRY~3k1ghiINXmHe8OPmOtj~dNx4~-IGf2-HK4J8p~j~etAvu9w0vZVf3~YHbpGHWokyVEFoy2JFlihGQwaRFhvEs~BtNt76HEiLRBaCN-Mq4XFJooiwdafvOMRU5JdG9z6FGJYc3yVp1Z0lkODIoALBanJaR3LofRA3PsJV4Hx0sXpQKiOKacbMErKyVMxprJJgHPCeKFJXE3HxC78fJ4-tSauShl27VT3gK1P2Q3VjDzaKJcvxxk5lG~pIAE-HA__"  className="product__thumbnail" />
        </div>
        <div className="product-info">
          <h3 className="product__name">
            <a  className="product__link">Respira</a>
          </h3>
          <a  className="product__category">Outdoor bar table and stool</a>
          <div className="product-price">
            <span className="product-price__new">5.000.000</span>
            <span className="product-price__old"></span>
          </div>
        </div>
        <div className="product-actions">
          <button className="btn product-action__quickview">Quick View</button>
          <button className="btn product-action__addtocart">Add To Cart</button>
          <div className="product-actions-more">\
            
            <span className="product-action__share"> <img src={Share} alt="" /> Share</span>
            <span className="product-action__compare">Compare</span>
            <span className="product-action__like">Like</span>
          </div>
        </div>
      </div>
      {/*End .product-item*/}
    </div>
  </div>
</div>

    {/* <div className="container">
      <div className="section-heading">
        <h2 className="section-heading__title">New</h2>
      </div>
      <div className="section-body">
        <div className="product-list">
         {products?.map((product:IProduct , index:number ) =>{
           return(
            <div className="product-item" key={index}>
            <div className="product-image">
              <img src={product?.image} ="#" className="product__thumbnail" />
              <span className="product-sale">{product?.discount}%</span>  
            </div>
            <div className="product-info">
              <h3 className="product__name">
                <Link to={`/product/${product.id}`}className="product__link">{product?.name}</Link>
              </h3>
              <a ="#"className="product__category">Stylish cafe chair</a>
              <div className="product-price">
                <span className="product-price__new">{product?.price - product?.price * (product.discount / 100)}$</span>
                <span className="product-price__old">{product?.price}$</span> 
              </div>
            </div> 
            <div className="product-actions">
              <button className="btn product-action__quickview">
              <Link to={`/product/${product.id}`}className="product__link">
                Quick View
                </Link>
                </button>
              <button className="btn product-action__addtocart">Add To Cart</button>
              <div className="product-actions-more">
                <span className="product-action__share">Share</span>
                <span className="product-action__compare">Compare</span>
                <span className="product-action__like">Like</span>
              </div>
            </div>
          </div>
           )
         })}
  
        </div>
      </div>
    </div> */}
  </section>
    </div>
  )
}

export default News
