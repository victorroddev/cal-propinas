import MenuItem from "./components/MenuItem.js"
import OrderContents from "./components/OrderContents.js"
import { OrderTotals } from "./components/OrderTotals.js"
import TipPercentageform from "./components/TipPercentageForm.js"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder.js"


function App() {
  
  const { order, tip, setTip, addItem, removeItem, placeOrder  } = useOrder()


  return (
    <>
    <header className="bg-teal-400 py-5">
      <h1 className="text-center text-4xl font-black">Calculadora de propinas</h1>
    </header>

    <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      <div className="p-5">
        <h2 className="text-4xl font-black">Menu</h2>

    <div className="space-y-3 mt-10">
      {menuItems.map(item => (
        <MenuItem
        key={item.id}
        item={item}
        addItem={addItem}
        />
      ))}
    </div>
    </div>

    <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
      {order.length > 0 ? (
        <>
        
              <OrderContents
                order={order}
                removeItem={removeItem}
              />

              <TipPercentageform 
                setTip={setTip}
                tip={tip}
                
              
              />
              <OrderTotals 
              order={order}
              tip={tip}
              placeOrder={placeOrder}
              />
        </>

      ) : (
        <p className="text-center">La orden esta vacia</p>
      )}
    

    </div>
    </main>

    </>
  )
}

export default App
