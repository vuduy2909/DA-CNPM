import { request } from '../utils/axiosInstance';
// GET FULL COURSE
export const getCards = async () => {
    const res = await request.get('/course-day/courses-with-days');
    return res;
};

// GET DETAIL OF A COURSE -> JUST GET DAYS IN COMPONENT
export const getDays = async (days) => {
    try {
        const res = await request.get(`/course-day/courses/${days}`);
        return res;
    } catch (error) {
        console.error('Error fetching days:', error);
        throw error;
    }
};

// GET FULL EXERCISES
export const getExercise = async () => {
    try {
        const res = await request.get(`/exercise`);
        return res;
    } catch (error) {
        console.error('Error fetching full exercises:', error);
        throw error;
    }
};

// GET EXERCISES OF DAYS IN A COURSE
export const getDetailDay = async (courseId, dayId) => {
    try {
        const res = await request.get(`/course/${courseId}/day/${dayId}/exercise`);
        return res;
    } catch (error) {
        console.error('Error fetching exercises:', error);
        throw error;
    }
};

// GET COMMENT OF EXERCISES IN A DAY
export const getComment = async (courseId, dayId) => {
    try {
        const res = await request.get(`/course/${courseId}/day/${dayId}/comment`);
        return res;
    } catch (error) {
        console.log('Error fetching comments', error);
        throw error;
    }
}

// GET COMMENT OF EXERCISES IN A DAY
export const postComment = async (data) => {
    try {
        const res = await request.post(`/comment/create`, data);
        return res;
    } catch (error) {
        console.log('Error fetching comments', error);
        throw error;
    }
}

export const postRecommend = async (data) => {
    try {
        const res = await request.post(`/track-data-ai/recommend-course`, data);
        return res
    } catch (error) {
        console.log('Error fetching recommend course', error);
    }
}

export const putDoneExercise = async (day, exercise) => {
    try {
        const res = await request.put(`/exercise-day/updateStatusForDay/day/${day}/exercise/${exercise}?status=true`);
        return res;
    } catch (error) {
        console.log('Error fetching recommend course', error);
    }
}

export const putReviewCourse = async (courseId, data) => {
    try {
        const res = await request.put(`/track-data-ai/update-effectiveness/${courseId}`, data);
        return res;
    } catch (error) {
        console.log('Error fetching recommend course', error);
    }
}

export * as collectionService from './collectionService';
