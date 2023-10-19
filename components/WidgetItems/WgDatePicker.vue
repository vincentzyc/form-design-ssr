<template>
  <div>
    <div :class="wrapClass" :style="formatStyle(props.item.style)">
      <div class="wg-title" v-show="props.item.showLabel" :style="{ width: changeRem(props.item.label.labelWidth) }">{{
        props.item.label.labelTitle
      }}</div>
      <div class="flex-auto disabled-input" @click="open()">
        <input
          readonly
          :id="props.item.key"
          v-model="props.item.value"
          :placeholder="props.item.placeholder"
          class="wg-input"
        />
      </div>
    </div>
    <VanPopup position="bottom" v-model:show="showPicker">
      <VanDatePicker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="cancel"
        @confirm="confirm"
      />
    </VanPopup>
  </div>
</template>

<script lang="ts" setup>
import { changeRem, formatStyle } from "@/utils/format/unit";
// import { useWgFormList } from "@/composition/use-wgform";
import { TypesDatePicker } from "./WgTypes";

const props = defineProps<{
  item: TypesDatePicker;
}>();

// const wgFormList = useWgFormList();
// const { wgData, formData } = wgFormList.useAddForm(props.item);

const wrapClass = ["wg-item", props.item.label.labelPosition === "top" ? "flex-column" : "align-middle"];

const minDate = new Date(1920, 0, 1);
const maxDate = new Date(2120, 12, 31);

const currentTime = new Date();
const currentYear = currentTime.getFullYear();
const currentMonth = currentTime.getMonth() + 1;
const currentDay = currentTime.getDate();

let showPicker = ref(false);

const currentDate = ref([
  currentYear.toString(),
  (currentMonth < 10 ? "0" + currentMonth : currentMonth).toString(),
  (currentDay < 10 ? "0" + currentDay : currentDay).toString(),
]);

const open = () => (showPicker.value = true);

const close = () => (showPicker.value = false);

const cancel = () => {
  close();
};

const confirm = (value: { selectedValues: string[] }) => {
  const strDate = value.selectedValues.join("-")
  props.item.value = strDate
  console.log(strDate)
  // formData[props.item.apiKey] = value.selectedValues.join("-");
  close();
};
</script>
