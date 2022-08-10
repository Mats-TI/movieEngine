import create from 'zustand'

export const useGlobalStore=create((set)=>({
    someGlobalVar:'initialVar',
    changeGlobal:()=>{
        set((state)=>({someGlobalVar:"New Var1"}))
    }
}))