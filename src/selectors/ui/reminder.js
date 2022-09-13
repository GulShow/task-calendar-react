import { createSelector } from 'reselect';
import { millisToDateTimeStrings } from '../../helpers/calendar';

export const getReminder = (state) => state.ui.reminder;

export const getFormattedReminder = createSelector(
  [getReminder],
  (reminder) => {
    if (!reminder) return null;

    return {
      id: reminder.id,
      description: reminder.description,
      color: reminder.color,
        action: reminder.city,
      ...millisToDateTimeStrings(reminder.dateTime),
    };
  }
);
