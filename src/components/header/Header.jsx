import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { faBed, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";

const Header = ({type}) => {

    const [openDate, setOpenDate] = useState(false)

    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState(
        {
          Adult:1,
          Children:0,
          Room: 1
        }
      );

    const handleOperation=(name,operation)=>{
        setOptions((prev)=>{
            return{
                ...prev, [name]:operation==="i" ? options[name]+1 : options[name]-1
            }
        })
    }



  return (
    <div className="header">
        <div className={type==="list"? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rental</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxi</span>
                </div>
            </div>
            {type !== "list" && <> <h1 className="headerTitle">
            Stay more, save more. It’s Genius.
            </h1>
            <p className="headerDesc">
                Enjoy discounts and travel rewards at hundreds of thousands of properties worldwide
                </p>
            <button className="headerButton">
                Sign In / Register
                </button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon" />
                    <input type="text" 
                    placeholder="Where are you going?" 
                    className="headerSearchInput" />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon 
                    icon={faCalendarDays} 
                    className="headerIcon"/>
                    <span 
                    onClick={()=>setOpenDate(!openDate)} 
                    className="headerSearchText">{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`} </span>
                    {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    />}
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                    <span 
                    onClick={()=>setOpenOptions(!openOptions)} 
                    className="headerSearchText">{`${options.Adult} Adult . ${options.Children} Children . ${options.Room} Room`} </span>
                    {openOptions && <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                                <button disabled={options.Adult <= 1} className="optionCounterBtn" 
                                onClick={()=>handleOperation("Adult","d")}>-</button>
                                <span className="optionCounterNumber">{options.Adult}</span>
                                <button 
                                className="optionCounterBtn" 
                                onClick={()=>handleOperation("Adult","i")}>
                                    +
                                    </button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                                <button disabled={options.Children < 1} className="optionCounterBtn" 
                                onClick={()=>handleOperation("Children","d")}>-</button>
                                <span className="optionCounterNumber">{options.Children}</span>
                                <button className="optionCounterBtn" onClick={()=>handleOperation("Children","i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                                <button disabled={options.Room <= 1} className="optionCounterBtn" 
                                onClick={()=>handleOperation("Room","d")}>-</button>
                                <span className="optionCounterNumber">{options.Room} </span>
                                <button className="optionCounterBtn" onClick={()=>handleOperation("Room","i")}>+</button>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="headerSearchItem">
                    <button className="headerButton">Search</button>
                </div>
            </div></> }
        </div>
    </div>
  )
}

export default Header