"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { CalendarDays } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

type CalendarPickerProps = {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
};

export const CalendarPicker: React.FC<CalendarPickerProps> = ({ selectedDate, onSelectDate }) => {
  const today = new Date();

  return (
    <div className="w-full p-4 bg-white rounded-lg border border-gray-200 flex flex-row justify-start items-start">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <CalendarDays className="text-sky-600" />
          <h4 className="text-slate-700 font-semibold text-sm">Pilih Tanggal</h4>
        </div>
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={onSelectDate}
          locale={id}
          weekStartsOn={1}
          fromMonth={today}
          toMonth={new Date(today.getFullYear(), today.getMonth() + 2, 0)}
          modifiersClassNames={{
            selected: "bg-sky-500 text-hi-blue-600 rounded-full",
            today: "text-sky-600 font-black",
          }}
          classNames={{
            root: "flex justify-center items-center w-[100%]",
            month: "flex flex-col justify-center ",
            caption_label: "text-slate-700 text-sm font-bold pt-2",
            nav_button: "text-slate-600 dark:text-slate-300",
            table: "text-gray-400 w-full border-spacing-0",
            head_row: "text-xs text-slate-600",
            day: "p-4 text-center text-sm text-slate-600 hover:bg-sky-100 rounded-full transition",
            row: "flex justify-center gap-1 mb-1",
          }}
        />
      </div>
      {selectedDate && (
        <p className="text-sm text-slate-500 mt-2 pl-8">
          <h4 className="text-slate-700 font-semibold text-sm">Tanggal yang dipilih</h4>
          <span className="font-semibold">{format(selectedDate, "dd MMMM yyyy", { locale: id })}</span>
        </p>
      )}
    </div>
  );
};
