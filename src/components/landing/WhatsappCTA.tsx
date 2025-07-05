'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Stepper, { Step } from './Stepper';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const WhatsappIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-.88-.436-1.017-.487-.137-.05-.274-.074-.412.074-.138.149-.516.632-.632.75-.116.117-.232.137-.412.05-.179-.087-.75-.274-1.428-.867-.528-.455-.88-1.017-1.017-1.182-.137-.165-.018-.25.074-.334.08-.074.179-.179.25-.25.074-.074.098-.137.149-.232.05-.098.025-.179-.025-.334-.05-.15-.412-1.017-.56-1.383-.149-.366-.297-.315-.412-.315-.116,0-.25.025-.375.025-.125,0-.315.05-.487.25s-.645.632-.645,1.56c0,.928.66,1.815.75,1.942.098.125,1.3,2.02,3.16,2.8.44.179.78.274,1.05.353.487.149.88.117,1.21-.05.366-.179.998-.693,1.135-1.36.137-.665.137-1.233.098-1.358.04-.125-.098-.212-.25-.353zM12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,21.6c-2.04,0-3.95-.6-5.6-1.6L2,22l2.05-4.4a9.6,9.6,0,0,1-1.65-5.2C2.4,6.4,6.7,2.4,12,2.4,17.3,2.4,21.6,6.4,21.6,12S17.3,21.6,12,21.6Z" />
    </svg>
);

export function WhatsappCTA() {
    const [isOpen, setIsOpen] = useState(false);
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [details, setDetails] = useState('');

    const handleComplete = () => {
        const formattedDate = date ? format(date, 'PPP', { locale: es }) : 'una fecha por confirmar';
        const message = `Hola La Casita, me gustaría hacer un pedido de ${amount || 'varias'} comidas para el ${formattedDate}. Detalles adicionales: ${details || 'Ninguno'}.`;
        const whatsappUrl = `https://wa.me/14048043231?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        setIsOpen(false);
    };

    return (
        <>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button
                        variant="default"
                        size="icon"
                        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg z-50 bg-[#25D366] hover:bg-[#1DAE52] text-white"
                    >
                        <WhatsappIcon />
                        <span className="sr-only">Contactar por WhatsApp</span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-xl p-0 bg-transparent border-none shadow-none">
                    <Stepper
                        onFinalStepCompleted={handleComplete}
                        backButtonText="Anterior"
                        nextButtonText="Siguiente"
                        completeButtonText="Enviar a WhatsApp"
                    >
                        <Step>
                            <h2 className="text-2xl font-bold text-center">¡Hola!</h2>
                            <p className="text-center text-muted-foreground">Personaliza tu pedido con La Casita en 4 simples pasos.</p>
                        </Step>
                        <Step>
                            <h2 className="text-xl font-semibold mb-4 text-center">¿Cuántas comidas necesitas?</h2>
                            <div className="flex justify-center items-center gap-2">
                                <Input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="15"
                                    className="w-24 text-center"
                                />
                                <span className="text-muted-foreground">órdenes</span>
                            </div>
                        </Step>
                        <Step>
                             <h2 className="text-xl font-semibold mb-4 text-center">¿Para qué fecha?</h2>
                             <div className="flex justify-center">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
                                    className="rounded-md border"
                                    locale={es}
                                />
                             </div>
                        </Step>
                        <Step>
                            <h2 className="text-xl font-semibold mb-2 text-center">¿Alguna alergia o instrucción especial?</h2>
                            <Textarea
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                                placeholder="Ej: Un niño es alérgico a la nuez."
                                rows={3}
                            />
                        </Step>
                    </Stepper>
                </DialogContent>
            </Dialog>
        </>
    );
}
