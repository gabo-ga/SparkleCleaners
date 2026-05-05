"use client";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import type { FormData } from '../../types';

export const ContactForm = () => {
    const form = useForm<FormData>();
    const { register, handleSubmit, formState, reset } = form;
    const { errors, isSubmitting } = formState;
    const [showSuccess, setShowSuccess] = useState(false);

    const onSubmit = async (data: FormData) => {
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    telephone: data.telephone,
                    messageContent: data.request,
                }),
            });

            if (!res.ok) throw new Error('Failed to submit form');
            setShowSuccess(true);
            reset();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    if (showSuccess) {
        return (
            <div
                className="rounded-[10px] p-4 flex gap-3 items-start"
                style={{
                    background: 'var(--green-50)',
                    border: '1px solid var(--green-400)',
                }}
            >
                <span className="flex-none mt-0.5" style={{ color: 'var(--green-600)' }}>
                    <CheckCircle2 size={20} />
                </span>
                <div className="flex-1">
                    <div className="font-semibold text-[15px]" style={{ color: 'var(--green-900)' }}>
                        Message sent!
                    </div>
                    <div className="text-[13px]" style={{ color: 'var(--green-800)' }}>
                        We&apos;ll reply within a few hours.
                    </div>
                </div>
                <button
                    onClick={() => setShowSuccess(false)}
                    className="text-xs font-medium underline"
                    style={{ color: 'var(--green-800)' }}
                >
                    Send another
                </button>
            </div>
        );
    }

    const inputClass = (hasError: boolean) =>
        `w-full px-3.5 py-2.5 text-[15px] rounded-[10px] outline-none transition-colors bg-white border ${
            hasError ? 'border-[var(--red-500)]' : 'border-[var(--neutral-300)] focus:border-[var(--brand-blue)]'
        }`;

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1.5">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Sarah Thompson"
                    className={inputClass(!!errors.name)}
                    {...register('name', {
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' },
                    })}
                />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
            </div>

            <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-900 mb-1.5">
                    Telephone
                </label>
                <input
                    type="tel"
                    id="telephone"
                    placeholder="(929) 377-0976"
                    className={inputClass(!!errors.telephone)}
                    {...register('telephone', {
                        required: { value: true, message: 'Telephone is required' },
                        minLength: { value: 10, message: 'Please enter a valid phone number' },
                    })}
                />
                {errors.telephone && <p className="mt-1 text-xs text-red-600">{errors.telephone.message}</p>}
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1.5">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className={inputClass(!!errors.email)}
                    {...register('email', {
                        required: true,
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Please enter a valid email',
                        },
                    })}
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="request" className="block text-sm font-medium text-gray-900 mb-1.5">
                    Message
                </label>
                <textarea
                    id="request"
                    rows={4}
                    placeholder="Tell us about your space…"
                    className={`${inputClass(!!errors.request)} resize-y`}
                    {...register('request', {
                        required: true,
                        minLength: { value: 10, message: 'Request must be at least 10 characters' },
                    })}
                />
                {errors.request && <p className="mt-1 text-xs text-red-600">{errors.request.message}</p>}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 font-bold tracking-wide rounded-[10px] transition-all duration-300 px-5 py-3 text-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: 'var(--action-primary)' }}
            >
                {isSubmitting ? 'SENDING…' : 'SEND MESSAGE'}
            </button>
        </form>
    );
};
