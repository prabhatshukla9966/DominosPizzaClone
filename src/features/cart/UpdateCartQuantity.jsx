import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItem } from "./CartSlice"
import { increaseItem } from "./CartSlice"

function UpdateCartQuantity({pizzaId,currentQuantity}) {
    const dispatch = useDispatch()
    return (
        <div className="flex items-center gap-2 md:gap-3">
        <Button
          type="small"
          onClick={() => dispatch(decreaseItem(pizzaId))}
        >
          -
        </Button>
       { currentQuantity}
        <Button
          type="small"
          onClick={() => dispatch(increaseItem(pizzaId))}
        >
          +
        </Button>
      </div>
    )
}

export default UpdateCartQuantity
