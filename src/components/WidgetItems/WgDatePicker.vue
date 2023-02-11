<template>
  <div>
    <div :class="wrapClass" :style="formatStyle(wgData.style)">
      <div class="wg-title" v-show="wgData.showLabel" :style="{ width: changeRem(wgData.label.labelWidth) }">{{
        wgData.label.labelTitle
      }}</div>
      <div class="flex-auto disabled-input" @click="open()">
        <input
          disabled
          :id="wgData.key"
          v-model="formData[wgData.apiKey]"
          :placeholder="wgData.placeholder"
          class="wg-input"
        />
      </div>
    </div>
    <Popup position="bottom" v-model:show="showPicker">
      <DatePicker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="cancel"
        @confirm="confirm"
      />
    </Popup>
  </div>
</template>

<script lang="ts" setup>
import { Popup, DatePicker } from "vant";
import { changeRem, formatStyle } from "@/utils/format/unit";
import { useWgFormList } from "@/composition/use-wgform";
import { TypesDatePicker } from "./WgTypes";

const props = defineProps<{
  item: TypesDatePicker;
}>();

const wgFormList = useWgFormList();
const { wgData, formData } = wgFormList.useAddForm(props.item);

const wrapClass = ["wg-item", wgData.label.labelPosition === "top" ? "flex-column" : "align-middle"];

const minDate = new Date(1920, 0, 1);
const maxDate = new Date(2120, 12, 31);

const currentTime = new Date();
const currentYear = currentTime.getFullYear();
const currentMonth = currentTime.getMonth() + 1;
const currentDay = currentTime.getDate();

let showPicker = $ref(false);

const currentDate = $ref([
  currentYear.toString(),
  (currentMonth < 10 ? "0" + currentMonth : currentMonth).toString(),
  (currentDay < 10 ? "0" + currentDay : currentDay).toString(),
]);

const open = () => (showPicker = true);

const close = () => (showPicker = false);

const cancel = () => {
  close();
};

const confirm = (value: { selectedValues: string[] }) => {
  formData[wgData.apiKey] = value.selectedValues.join("-");
  close();
};
</script>
