import { getIn } from 'seamless-immutable';

export const daysAMonth = 365 / 12;

const getTotal = (usage, quantity, hourlyConsumption, maintenance, users) => {
  const dailyConsumption = hourlyConsumption * usage * quantity * users;
  const consumption = (dailyConsumption + maintenance) * daysAMonth;
  return Math.round(consumption);
};

export const createItem = (item, people, category) => {
  const usage = getIn(item, ['usage'], 24);
  const quantity = getIn(item, ['quantity'], 1);
  const hourlyConsumption = getIn(item, ['appliance', 'hourly'], 0);
  const maintenance = getIn(item, ['appliance', 'maintenance'], 0);
  const users = category.userDriven ? people : 1;
  return {
    total: getTotal(usage, quantity, hourlyConsumption, maintenance, users),
    name: item.appliance.name,
    quantity,
    usage,
    id: item.id || `${item.appliance.id}_${Math.random()}`
  };
};

export const addItemToCategory = (itemData, categoryId, categories, people) => {
  const updatedCategories = [...categories];
  const categoryIndex = updatedCategories.findIndex(_category => _category.id === categoryId);
  const category = updatedCategories[categoryIndex];

  const item = createItem(itemData, people, category);

  updatedCategories[categoryIndex] = {
    ...category,
    selections: [...category.selections, { ...item }],
    totalUsage: category.totalUsage + item.total
  };

  return updatedCategories;
};

export const updateItemInCategory = (itemData, categoryId, categories, people) => {
  const updatedCategories = [...categories];
  const categoryIndex = updatedCategories.findIndex(_category => _category.id === categoryId);
  const itemIndex = updatedCategories[categoryIndex].selections.findIndex(_item => _item.id === itemData.id);
  const category = updatedCategories[categoryIndex];

  const item = createItem(itemData, people, category.showUsage);
  const selections = [...updatedCategories[categoryIndex].selections];
  selections[itemIndex] = item;
  const totalDiff = item.total - updatedCategories[categoryIndex].selections[itemIndex].total;

  updatedCategories[categoryIndex] = {
    ...category,
    selections: [...selections],
    totalUsage: category.totalUsage + totalDiff
  };

  return updatedCategories;
};

export const updatePeopleOnCategories = (categories, people) => {
  let updatedCategories = [...categories];
  updatedCategories = updatedCategories.map(category => {
    const updatedCategory = { ...category };
    updatedCategory.selections = updatedCategory.selections.map(categorySelection => {
      const updatedSelection = { ...categorySelection };
      const item = category.items.find(_item => _item.name === categorySelection.name);
      const usage = getIn(categorySelection, ['usage'], 24);
      const quantity = getIn(categorySelection, ['quantity'], 1);
      const hourlyConsumption = getIn(item, ['hourly'], 0);
      const maintenance = getIn(item, ['maintenance'], 0);
      const users = category.userDriven ? people : 1;
      const prevTotal = updatedSelection.total;
      updatedSelection.total = getTotal(usage, quantity, hourlyConsumption, maintenance, users);
      updatedCategory.totalUsage = category.totalUsage - prevTotal + updatedSelection.total;
      return updatedSelection;
    });
    return updatedCategory;
  });
  return updatedCategories;
};

export const deleteItemInCategory = (item, categoryId, categories) => {
  const updatedCategories = [...categories];
  const categoryIndex = updatedCategories.findIndex(_category => _category.id === categoryId);
  const itemIndex = updatedCategories[categoryIndex].selections.findIndex(_item => _item.id === item.id);

  const category = updatedCategories[categoryIndex];
  const selections = [...updatedCategories[categoryIndex].selections];
  selections.splice(itemIndex, 1);

  updatedCategories[categoryIndex] = {
    ...category,
    selections: [...selections],
    totalUsage: category.totalUsage - item.total
  };

  return updatedCategories;
};
