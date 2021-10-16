import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import { Button, DialogContentText } from '@material-ui/core';

const ALLHero = (props) => {

    const[open, isOpen] = useState(false);

    const openDesc = () => {
        isOpen(!open);
    }
    const closeDesc = () => {
        isOpen(open);
    }

    return (
        <>
        <div>
          <div onClick={openDesc} className='cursor-pointer'>
              <img src={props.val.image.url} alt='' className='w-auto h-auto'/>
              <div className='pt-1'>
              <span className='text-white text-2xl border solid border-white px-2 pb-1' >{props.val.name}</span>
               </div>
            </div>
            <div>
                <Dialog open={open} onClose={closeDesc}>
                    <DialogTitle>{props.val.name}</DialogTitle>
                     <DialogContent>
                     <div className='grid grid-cols-1 gap-2  md:grid-cols-2 gap-4'>
                       <img src={props.val.image.url} alt='' className='w-auto h-auto'/>
                        
                         <DialogContentText className='grid grid-cols-1 py-2'>
                         <span className=''>Race:- {props.val.appearance.race}</span>
                         <span className=''>Intelligence:- {props.val.powerstats.intelligence}</span>
                         <span className=''>Strength:- {props.val.powerstats.strength}</span>
                         <span className=''>Speed:- {props.val.powerstats.speed}</span>
                         <span className=''>Durability:- {props.val.powerstats.durability}</span>
                         <span className=''>Power:- {props.val.powerstats.power}</span>
                         <span className=''>Combat:- {props.val.powerstats.combat}</span>
                        <span className=''>Occuaption:- {props.val.work.occupation}</span>
                        <span className=''>Base:- {props.val.work.base}</span>
                    </DialogContentText>
                     
                     </div>
                     </DialogContent>
                     <DialogActions>
                         <Button onClick={openDesc} className='text-red-300'>Close</Button>
                     </DialogActions>
                </Dialog>
            </div>
        </div>
        </>
    )
}

export default ALLHero
