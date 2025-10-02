"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Loader2 } from 'lucide-react'

const businessEnquirySchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  companyName: z.string().optional(),
  productInterest: z.string().min(1, 'Please select a product interest'),
  weightRange: z.string().min(1, 'Please select a weight range'),
  quantity: z.string().min(1, 'Please select a quantity'),
  additionalDetails: z.string().optional(),
})

type BusinessEnquiryFormData = z.infer<typeof businessEnquirySchema>

const productInterests = [
  'Select product interest',
  'Gold Coins (22K & 24K)',
  'Customized Gold Coins',
  'Gold Bars (22K & 24K)',
  'Silver Coins',
  'Customized Silver Coins',
  'Silver Bars',
  'Multiple Products',
  'Other'
]

const weightRanges = [
  'Select weight range',
  '100mg - 1g',
  '1g - 5g',
  '5g - 10g',
  '10g - 20g',
  '20g - 40g',
  '40g+',
  'Custom weight'
]

const quantities = [
  'Select quantity',
  '1 - 10 pieces',
  '10 - 50 pieces',
  '50 - 100 pieces',
  '100 - 500 pieces',
  '500+ pieces',
  'Bulk order (custom quantity)'
]

export function BusinessEnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BusinessEnquiryFormData>({
    resolver: zodResolver(businessEnquirySchema)
  })

  const onSubmit = async (data: BusinessEnquiryFormData) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      reset()
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <div className="text-center space-y-6 py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-green-600 mb-2">Enquiry Submitted!</h3>
          <p className="text-muted-foreground">
            Thank you for your enquiry. Our team will contact you shortly.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Personal Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              {...register('fullName')}
              type="text"
              id="fullName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number *
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="companyName" className="block text-sm font-medium mb-2">
              Company Name
            </label>
            <input
              {...register('companyName')}
              type="text"
              id="companyName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              placeholder="Enter company name (optional)"
            />
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Product Information</h3>
        
        <div>
          <label htmlFor="productInterest" className="block text-sm font-medium mb-2">
            Product Interest *
          </label>
          <select
            {...register('productInterest')}
            id="productInterest"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
          >
            {productInterests.map((option, index) => (
              <option key={index} value={index === 0 ? '' : option} disabled={index === 0}>
                {option}
              </option>
            ))}
          </select>
          {errors.productInterest && (
            <p className="text-red-500 text-sm mt-1">{errors.productInterest.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="weightRange" className="block text-sm font-medium mb-2">
              Weight Range *
            </label>
            <select
              {...register('weightRange')}
              id="weightRange"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            >
              {weightRanges.map((option, index) => (
                <option key={index} value={index === 0 ? '' : option} disabled={index === 0}>
                  {option}
                </option>
              ))}
            </select>
            {errors.weightRange && (
              <p className="text-red-500 text-sm mt-1">{errors.weightRange.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium mb-2">
              Quantity *
            </label>
            <select
              {...register('quantity')}
              id="quantity"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            >
              {quantities.map((option, index) => (
                <option key={index} value={index === 0 ? '' : option} disabled={index === 0}>
                  {option}
                </option>
              ))}
            </select>
            {errors.quantity && (
              <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="additionalDetails" className="block text-sm font-medium mb-2">
            Additional Details
          </label>
          <textarea
            {...register('additionalDetails')}
            id="additionalDetails"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            placeholder="Tell us more about your requirements..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-6">
        <Button
          type="submit"
          variant="gold"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Enquiry'
          )}
        </Button>
      </div>
    </form>
  )
}
