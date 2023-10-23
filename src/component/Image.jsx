import products from "./Product"

function Image() {
  return (
    <div>
        <img src={products.image} alt="iphone 13"  />
    </div>
  )
}

export default Image