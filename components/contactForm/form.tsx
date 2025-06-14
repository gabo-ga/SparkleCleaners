"use client";
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import type { FormData } from '../../types';

export const ContactForm = () => {
    const form = useForm<FormData>();
    const { register, control, handleSubmit, formState, reset } = form;
    const { errors, isSubmitting } = formState;


    const onSubmit = async (data: FormData) => {
        try {
          console.log(data);
          reset();
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
    

    return(
        <>
        <div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Name must be at least 2 characters' } })}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* Telephone Field */}
            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                Telephone
              </label>
              <input
                type="tel"
                id="telephone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                {...register('telephone', { 
                  required: { value: true, message: 'Telephone is required' }, 
                  minLength: { value: 10, message: 'Please enter a valid phone number' } 
                })}
              />
              {errors.telephone && (
                <p className="mt-1 text-sm text-red-600">{errors.telephone.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              {...register('email', { required: true, pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Please enter a valid email' } })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Request Field */}
            <div>
              <label htmlFor="request" className="block text-sm font-medium text-gray-700 mb-1">
                Your Request
              </label>
              <textarea
                id="request"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                {...register('request', { required: true, minLength: { value: 10, message: 'Request must be at least 10 characters' } })}
              />
              {errors.request && (
                <p className="mt-1 text-sm text-red-600">{errors.request.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          <DevTool control={control}/>
          </div>
          </>
    );
};