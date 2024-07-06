import { useState } from "react";
import Adminsidebar from "../../components/Adminsidebar";

const Coupon = () => {
  const [size, setSize] = useState<number>(8);
  const [prefix, setPrefix] = useState<string>("");
  const [includeNumber, setIncludeNumber] = useState<boolean>(false);
  const [includeCharacters, setIncludeCharacter] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [iscopied, setisCopied] = useState<boolean>(false);
  const [coupon, setCoupon] = useState<string>("");

  const copytext=(coupon:string)=>{

  }

  return (
    <div className="admin-container">
      <Adminsidebar />
      <main className="dashboard-app-container">
        <h1>Coupon</h1>
        <section>
          <form className="coupon-form">
            <input
              type="text"
              placeholder="Text to include "
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              maxLength={size}
            />
            <input
              type="number"
              placeholder="Coupon length "
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              min={8}
              max={25}
            />

            <fieldset>
              <legend>Include</legend>
              <input
                type="checkbox"
                checked={includeNumber}
                onChange={() => setIncludeNumber((prev) => !prev)}
              />
              <span>Numbers</span>
              <input
                type="checkbox"
                checked={includeCharacters}
                onChange={() =>setIncludeCharacter((prev) => !prev)}
              />
              <span>Characters</span>
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols((prev) => !prev)}
              />
              <span>Symbols</span>
            </fieldset>
            <button type="submit">Generate</button>
          </form>

         {
          coupon && <code>{coupon}
          <span onClick={()=>copytext(coupon)}>{iscopied ? "Copied":"Copy"}</span>
          </code>
         }





        </section>
      </main>
    </div>
  );
};

export default Coupon;
