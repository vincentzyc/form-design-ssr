export interface TypesSelect {
  key: string;
  type: string; // "Select",
  name: string; //  "下拉选择框",
  value: string; //  "",
  apiKey: string; //  "educationLevel",
  placeholder: string; //  "请选择教育程度",
  showLabel: boolean; //  true,
  label: {
    labelTitle: string; //  "教育程度",
    labelPosition: 'left' | 'top';
    labelwidth: number; //  66,
    labelWidth: string; //  "66px"
  };
  fieldTypes: string; //  "selectTypes",
  options: { text: string; value: string }[]; // [{ text: '硕士及以上', value: '硕士及以上' },{ text: '本科', value: '本科' }],
  style: {
    margin: string; //  "0px 0px 0px 0px"
  };
}
