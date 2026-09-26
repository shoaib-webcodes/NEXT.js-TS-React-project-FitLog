

'use client'
import { Bookmark } from 'lucide-react';

const SavedButton = () => {
    return (
       <button
        type="button"
       // onClick={onSaveForLater}
        className="inline-flex h-[60px] items-center justify-center gap-3 rounded-2xl border border-[#39404d] bg-transparent px-8 text-base font-medium text-[#e5e7eb] transition hover:bg-white/5"
      >
        <Bookmark size={21} strokeWidth={2} />
        Save for later
      </button>
    );
};

export default SavedButton;